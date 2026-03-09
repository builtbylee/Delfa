CREATE SCHEMA IF NOT EXISTS identity;
CREATE SCHEMA IF NOT EXISTS profile;
CREATE SCHEMA IF NOT EXISTS profiler;

DO $$ BEGIN
  CREATE TYPE account_state AS ENUM ('active', 'paused', 'blocked', 'deleted');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE verification_stage AS ENUM ('none', 'basic', 'photo', 'manual_review');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE trust_tier AS ENUM ('unverified', 'basic', 'verified', 'heightened_review');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE public_visibility_state AS ENUM ('draft', 'visible', 'hidden');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE media_moderation_state AS ENUM ('pending', 'approved', 'rejected');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE profiler_progress_status AS ENUM ('not_started', 'in_progress', 'completed');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE profiler_privacy_level AS ENUM ('PUBLIC_PROFILE', 'MATCHING_PRIVATE', 'SENSITIVE_PRIVATE');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

CREATE TABLE IF NOT EXISTS identity.users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  clerk_user_id text NOT NULL UNIQUE,
  account_state account_state NOT NULL DEFAULT 'active',
  created_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz
);

CREATE INDEX IF NOT EXISTS identity_users_clerk_user_id_idx
  ON identity.users (clerk_user_id);

CREATE TABLE IF NOT EXISTS identity.devices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES identity.users(id) ON DELETE CASCADE,
  platform text NOT NULL,
  push_token text,
  last_seen_at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS identity_devices_user_id_idx
  ON identity.devices (user_id);

CREATE TABLE IF NOT EXISTS identity.verification_state (
  user_id uuid PRIMARY KEY REFERENCES identity.users(id) ON DELETE CASCADE,
  stage verification_stage NOT NULL DEFAULT 'none',
  trust_tier trust_tier NOT NULL DEFAULT 'unverified',
  is_review_required boolean NOT NULL DEFAULT false,
  review_status text,
  verified_at timestamptz,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS identity_verification_state_trust_tier_idx
  ON identity.verification_state (trust_tier);

CREATE TABLE IF NOT EXISTS profile.locations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  city_slug text NOT NULL UNIQUE,
  label text NOT NULL,
  lat integer,
  lng integer,
  active_launch_market integer NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS profile_locations_city_slug_idx
  ON profile.locations (city_slug);

CREATE TABLE IF NOT EXISTS profile.public_profiles (
  user_id uuid PRIMARY KEY REFERENCES identity.users(id) ON DELETE CASCADE,
  first_name text,
  age integer,
  city_id uuid REFERENCES profile.locations(id),
  bio text,
  public_visibility_state public_visibility_state NOT NULL DEFAULT 'draft',
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS profile_public_profiles_city_id_idx
  ON profile.public_profiles (city_id);

CREATE TABLE IF NOT EXISTS profile.private_profile_facts (
  user_id uuid PRIMARY KEY REFERENCES identity.users(id) ON DELETE CASCADE,
  gender_identity text,
  gender_openness text,
  age_min integer,
  age_max integer,
  distance_radius_km integer,
  relationship_structure text,
  launch_cohort_id text,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS profile.profile_media (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES identity.users(id) ON DELETE CASCADE,
  storage_key text NOT NULL,
  media_type text NOT NULL,
  position integer NOT NULL DEFAULT 0,
  moderation_state media_moderation_state NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS profile_media_user_id_idx
  ON profile.profile_media (user_id);

CREATE TABLE IF NOT EXISTS profiler.profiler_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES identity.users(id) ON DELETE CASCADE,
  question_id text NOT NULL,
  schema_version text NOT NULL,
  privacy_level profiler_privacy_level NOT NULL,
  response_payload jsonb NOT NULL,
  is_current integer NOT NULL DEFAULT 1,
  answered_at timestamptz NOT NULL DEFAULT now(),
  superseded_at timestamptz
);

CREATE INDEX IF NOT EXISTS profiler_responses_user_question_idx
  ON profiler.profiler_responses (user_id, question_id);

CREATE TABLE IF NOT EXISTS profiler.profiler_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES identity.users(id) ON DELETE CASCADE,
  section_id text NOT NULL,
  schema_version text NOT NULL,
  status profiler_progress_status NOT NULL,
  completion_percent integer NOT NULL DEFAULT 0,
  started_at timestamptz,
  completed_at timestamptz,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS profiler_progress_user_section_idx
  ON profiler.profiler_progress (user_id, section_id);

CREATE TABLE IF NOT EXISTS profiler.mirror_moments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES identity.users(id) ON DELETE CASCADE,
  section_id text NOT NULL,
  mirror_moment_id text NOT NULL,
  payload jsonb NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS mirror_moments_user_section_idx
  ON profiler.mirror_moments (user_id, section_id);

CREATE TABLE IF NOT EXISTS profiler.compatibility_confidence_snapshots (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES identity.users(id) ON DELETE CASCADE,
  schema_version text NOT NULL,
  completion_percent integer NOT NULL DEFAULT 0,
  compatibility_preview jsonb,
  dimension_scores jsonb,
  explanation_preview jsonb,
  computed_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS compatibility_confidence_snapshots_user_idx
  ON profiler.compatibility_confidence_snapshots (user_id, computed_at);
