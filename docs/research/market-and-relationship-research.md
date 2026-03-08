# Delfa Research Brief

- Version: `0.1.0`
- Date: `2026-03-08`
- Scope:
  - Current dating app drawbacks and user complaints
  - Data-backed predictors of healthy, lasting relationships and marriages
- Purpose:
  - Provide an evidence base for Delfa's core product mechanics
  - Translate evidence into profiler, matching, and lifecycle design decisions

## 1. Executive Summary

The evidence supports Delfa's core direction.

On the market side, the strongest recurring app failures are:

- burnout from high-volume, low-signal matching
- ghosting and low-effort behavior
- deception and profile distrust
- safety problems including harassment, scams, and stalking
- ambiguity around relationship intent
- predatory monetization and opaque pricing
- privacy and data-handling concerns
- rising AI-enabled authenticity problems
- accessibility and inclusion failures for some user groups
- app mechanics that reward engagement volume over relationship outcomes

On the relationship-science side, the most defensible predictors of durable relationship quality are:

- commitment and relationship intent
- attachment security
- low conflict / strong repair capacity
- appreciation and partner responsiveness
- emotional stability / low neuroticism
- sexual satisfaction and intimacy fit
- values, beliefs, and life-goal alignment
- stress and financial coping

Implication for Delfa:

- the app should optimize for `depth, clarity, safety, and follow-through`
- the profiler should prioritize `relationship process variables` over surface preferences
- the matching engine should not be driven primarily by photos, hobbies, or volume of interactions

## 2. Research Approach

### 2.1 Market Pain Point Research

Evidence types used:

- large public surveys
- peer-reviewed studies
- systematic reviews and scoping reviews
- consumer protection data

Priority was given to:

- Pew Research Center
- FTC
- regulatory and government sources
- company earnings and investor materials where relevant
- peer-reviewed journals and open-access full text

### 2.2 Relationship Predictor Research

Evidence types used:

- longitudinal couple studies
- systematic reviews
- meta-analyses
- large multi-dataset predictive studies

Priority was given to:

- peer-reviewed research
- large-N or multi-study work
- designs with longitudinal or dyadic evidence

### 2.3 Verification Standard for External Claims

Because many dating-app narratives circulate through blogs, creator threads, and advocacy summaries, a second-pass verification standard was applied to externally sourced claims before they were incorporated into this brief.

Claims were included only when they were supported by at least one of the following:

- a primary source
- a peer-reviewed source
- a reputable research organization
- a government or regulator source
- a directly attributable company or market disclosure

Claims were excluded or explicitly qualified when they relied mainly on:

- anonymous forum posts
- unsourced app-review summaries
- advocacy framing without primary evidence
- exact operational allegations that cannot be independently verified

## 3. Topic A: Main Complaints and Drawbacks of Current Dating Apps

## 3.1 Burnout, fatigue, and low-quality volume

### Evidence

- Forbes Health / OnePoll surveyed `1,000` U.S. adults who had used a dating app within the last year in fieldwork conducted `2024-03-27` to `2024-04-01` with `+/- 3.1` margin of error.
- `78%` reported feeling emotionally, mentally, or physically exhausted by dating apps at least sometimes.
- Top stated burnout causes were:
  - inability to find a good connection: `40%`
  - disappointment in people: `35%`
  - rejection: `27%`
  - repetitive conversations while chatting with multiple matches: `24%`
  - swiping: `22%`
  - time spent using the apps: `21%`
- `41%` said they had experienced ghosting.
- `38%` reported being catfished.

### Interpretation

This is direct evidence that the dominant app mechanic is not just inefficient; it is actively tiring users out. The complaint is not merely "too few matches." It is "too much low-quality interaction."

### Delfa implication

- One active match at a time is evidence-aligned.
- Guided depth should replace concurrent shallow chat threads.
- The product should reward completion of a match cycle, not ongoing browsing.

## 3.2 Choice overload and the "rejection mindset"

### Evidence

- A 2021 peer-reviewed study in `Computers in Human Behavior` found that greater perceived partner availability on dating apps was associated with:
  - higher fear of being single
  - lower self-esteem
  - greater partner choice overload
- The paper explicitly frames excessive availability as one problematic feature of dating apps.

### Interpretation

This supports the thesis that more options do not reliably improve outcomes. They can worsen user psychology and encourage constant comparison.

### Delfa implication

- Restrict visible choice.
- Avoid infinite feeds and swipe stacks.
- Present a small number of intentional decisions with a clear lifecycle.

## 3.3 Frustration, disappointment, and emotional asymmetry

### Evidence

- Pew Research Center's 2023 report found that among current or recent users:
  - roughly `9 in 10` felt disappointed by people they saw on apps at least sometimes
  - about `8 in 10` felt excited at least sometimes
  - but roughly twice as many said they `often` felt disappointed as `often` felt excited
- Pew's 2020 report found current or recent users said online dating made them feel more frustrated than hopeful.
- Message dynamics are asymmetric:
  - in Pew 2020, `57%` of male users said they did not receive enough messages
  - women were `5x` as likely as men to say they received too many messages (`30%` vs `6%`)

### Interpretation

Current app design often produces poor signal for both sides:

- some users feel ignored
- others feel overloaded
- both groups are pushed into low-intent interaction patterns

### Delfa implication

- Mutual pacing matters.
- Match quality should dominate match quantity.
- Delfa should control interaction volume rather than maximizing it.

## 3.4 Dishonesty and profile inflation

### Evidence

- Pew 2020 found `71%` of online daters said it is `very common` for people on dating platforms to lie about themselves to appear more desirable.
- Pew 2020 also found `50%` said fake scam accounts are very common.
- Forbes Health 2025 reported catfishing at `38%` among respondents.
- A Stanford / Journal of Communication study on mobile dating conversations found about `7%` of messages in the discovery phase were deceptive.

### Interpretation

Users do not trust profile truthfulness. This is not limited to dramatic catfishing; it also includes routine embellishment and self-presentation inflation.

### Delfa implication

- Profiler design must reduce performative self-reporting.
- Verification, behavioral calibration, and consistency checks matter.
- Matching should use observed behavior over time, not just stated ideals.

## 3.5 Harassment and unsafe experiences

### Evidence

- Pew 2023 found `48%` of people who had ever used a dating site or app had experienced at least one of four unwanted behaviors measured in the study.
- Pew 2023 found `56%` of women under 50 who had used dating apps had received unwanted sexually explicit messages or images.
- Pew 2020 found:
  - `37%` had experienced continued contact after saying they were not interested
  - `35%` had received an unwanted sexually explicit image or message
  - among women, `48%` reported unwanted continued contact and `46%` reported unwanted explicit content
- A 2023 scoping review on sexual harassment via dating apps found prevalence ranging from `57%` to `88.8%`, with women and sexual minorities at higher risk.

### Interpretation

Safety is not a peripheral compliance issue. It is a core product quality issue that shapes whether users trust the platform enough to invest emotionally.

### Delfa implication

- Safety tooling must be first-class, not hidden.
- Lower-volume matching can be positioned as a safety feature as well as a quality feature.
- Guided closure and strong moderation standards are differentiators, not admin work.

## 3.6 Scams, fraud, and trust collapse

### Evidence

- Pew 2023 found `52%` of users said they had encountered someone they believed was trying to scam them.
- FTC reported romance scammers cost nearly `70,000` consumers `$1.3 billion` in `2022`.
- FTC also reported sextortion in romance scams had increased more than `8x` in the prior three years, with ages `18-29` six times more likely than older consumers to report it.
- Kaspersky's 2024 global survey found:
  - `23%` experienced some form of online stalking from someone they were newly dating
  - `39%` reported some form of harassment or abuse from a current or previous partner

### Interpretation

Trust failure is one of the clearest structural weaknesses in the category. Users are being asked to invest emotionally in environments they do not regard as safe or credible.

### Delfa implication

- Verification and safety controls are part of the product promise.
- Delfa should emphasize trust, identity confidence, and in-platform safety guidance.
- Moving conversations off-platform too early should be discouraged.

## 3.7 Ambiguous intentions and relationship mismatch

### Evidence

- Pew 2020 found `63%` of online daters said it was very important that profiles included the type of relationship the other person was looking for.
- Forbes Health 2025 reported that nearly half of respondents were using apps to seek a long-term relationship.
- Pew 2020 also found `61%` said it was at least somewhat easy to find people looking for the same kind of relationship, meaning a substantial minority still struggled.

### Interpretation

Users care strongly about intent clarity. Existing apps often under-serve this by allowing vague goals, strategic ambiguity, or behavior inconsistent with stated intent.

### Delfa implication

- Intent should be a top-level product primitive.
- Match eligibility should be strongly constrained by intent and life-goal compatibility.
- Post-match experiences should make low-intent behavior costly.

## 3.8 Platform incentives are misaligned with user outcomes

### Evidence

- The market evidence above clusters around design features that maximize time-on-app:
  - large option pools
  - repeated conversational resets
  - low-cost disengagement
  - little accountability for ghosting
  - premium models often linked to more reach or more attention
- The systematic review on problematic online dating notes that app design can encourage objectification, self-esteem reinforcement loops, and problematic use.

### Interpretation

Even when not stated directly in survey wording, the pattern is clear: users experience the category as optimized for engagement mechanics, not relationship outcomes.

### Delfa implication

- Monetization must not depend on volume.
- Subscription value should come from insight, trust, and quality, not more swipes or visibility boosts.

## 3.9 Predatory monetization and opaque pricing

### Evidence

- Tinder launched `Tinder Select` in `September 2023` at `$499` per month, explicitly tying premium spend to more access and visibility.
- In `August 2025`, the FTC announced that Match Group agreed to pay `$14 million` and stop deceptive advertising, cancellation, and billing practices relating to Match.com.
- Mozilla Foundation and Consumers International found that Tinder Plus pricing could vary by as much as `5x` for the same service, with up to `31` price points within a single country and older users often paying more.
- As of `2026`, Tinder is subject to a California class settlement of `$60.5 million` over alleged age-based pricing discrimination.
- Hinge's official help center says free users can send only a `select number of likes per day`; multiple secondary sources consistently place that figure around `8 per day`, not `7 per week`.

### Interpretation

The monetization problem is real and evidence-backed. However, some stronger claims made in public discourse require caution:

- there is evidence of opaque pricing and deceptive subscription practices
- there is not strong public evidence that apps are deliberately withholding each user's best matches behind paywalls
- "shadowbanning to force payment" remains an allegation, not a verified fact

### Delfa implication

- Delfa should adopt an explicit anti-manipulation monetization policy.
- No boosts, pay-for-visibility, or opaque scarcity mechanics.
- Premium value should come from insight, clarity, and support, not ranked access to people.

## 3.10 Privacy, data exploitation, and regulatory pressure

### Evidence

- Mozilla's 2024 review of `25` dating apps found that `22` received its `*Privacy Not Included` warning label.
- In Norway, the Grindr GDPR case resulted in a `NOK 65 million` fine, and the Court of Appeal upheld that fine on `2025-10-21`.
- Australia introduced an online dating industry code of conduct that took effect on `2024-10-01`, after government pressure following evidence of widespread harm on platforms.
- In California, `SB 957`, the `Online Dating Safety and Transparency Act`, was introduced on `2026-02-19` to strengthen safety, transparency, and accountability for dating platforms.

### Interpretation

Dating-app problems are no longer just UX complaints. Privacy, moderation, identity handling, and safety transparency are becoming regulatory issues.

### Delfa implication

- Separate public profile data from sensitive ranking data.
- Be explicit about moderation, review, and account-state decisions.
- Design for auditability and clean user-facing privacy controls from the start.

## 3.11 AI-enabled deception and the authenticity crisis

### Evidence

- Scientific American reported in `2025` that Match and the Kinsey Institute found `26%` of U.S. singles said they use AI to enhance dating, a `333%` jump from the previous year.
- The same Scientific American piece cites Norton research indicating that `6 in 10` people who use dating apps believe they have encountered at least one AI-written conversation.
- A `2026` UK survey commissioned by Sumsub found `84%` of respondents said AI content had made it harder to trust matches or date successfully.
- Australian Federal Police guidance in `2025` explicitly warned that scammers now use AI during video chats to mimic another person's face and voice.

### Interpretation

The older fake-profile problem has evolved into an authenticity problem:

- synthetic profile content
- AI-assisted messaging
- deepfakes
- identity-layer fraud

### Delfa implication

- Authenticity must be a product layer, not a badge.
- Delfa should treat profile verification, liveness, suspicious behavior detection, and conversation-integrity signals as ongoing controls.

## 3.12 Accessibility, inclusion, and high-risk user groups

### Evidence

- AudioEye's accessibility survey found that among disabled respondents who had used dating apps, `75%` said the apps were not accessible, `78%` said they faced challenges using them, and `100%` said dating apps were not designed to be accessible for people with disabilities.
- Human Rights Watch documented severe digital targeting risks for LGBT people in the Middle East and North Africa, showing how identity-revealing platforms can create outsized harm in hostile environments.
- Tinder's `Traveler Alert` feature was designed around `69` countries where being openly LGBTQ+ can create legal or physical risk.
- Ofcom reported in `2025` that online dating in the UK was significantly more popular among men than women (`65%` vs `35%`), with Hinge a notable exception at `53%` women in the measured period.

### Interpretation

Mainstream dating apps do not fail users evenly. Disabled users, LGBTQ+ users in hostile jurisdictions, and users subject to strong marketplace imbalance face distinct harms.

### Delfa implication

- Accessibility should be a design requirement, not an afterthought.
- Sensitive identity data should be treated as high-risk.
- Trust and safety features should account for context-specific risks, not assume one global user experience.

## 3.13 Market contraction and trust decline

### Evidence

- Ofcom reported in `2025` that fewer people in the UK were swiping to find love, with Tinder down `600,000` users, Bumble down `300,000+`, Hinge down `131,000`, and Grindr down `11,000` versus the prior year.
- Ofcom also reported roughly `4.9 million` UK adults used an online dating service in `2024`, or about `1 in 10` adults.
- Bumble's official `Q3 2025` results showed total paying users down `16%` year over year to `3.6 million`, alongside a `10%` revenue decline.

### Interpretation

The category is not disappearing, but user trust is clearly under pressure. This matters because Delfa does not need to create dating demand from scratch; it needs to offer a more credible alternative to a fatigued market.

### Delfa implication

- Position Delfa as a trust-restoring product, not just a feature variant.
- Outcome quality should be visible in the product and measurable internally.

## 4. Topic A Synthesis: Priority Complaint Clusters for Delfa

The strongest complaint clusters, ranked by strategic relevance to Delfa, are:

1. `Burnout from too many low-quality options`
2. `Ghosting and lack of respectful closure`
3. `Dishonesty and low trust`
4. `Safety failures: harassment, scams, stalking`
5. `Ambiguous relationship intent`
6. `Predatory monetization and opaque pricing`
7. `Privacy, authenticity, and identity-handling failures`
8. `Mechanics that reward browsing rather than commitment`

These priorities justify Delfa's proposed core features:

- one active match
- progressive profiling
- graceful disconnect
- intent clarity
- behavioral calibration
- no swipe-first mechanic

## 4.1 Second-pass verification of external market claims

This section captures how the broader external claims set was treated after a stricter verification pass.

### Verified and incorporated

- Dating-app burnout is widespread and quantifiable.
- Harassment, scams, stalking, and unwanted contact are material category problems.
- Opaque pricing and manipulative subscription practices are real risks in the market.
- Tinder's `$499/month` premium tier is real.
- Match Group's `$14 million` FTC settlement is real.
- Tinder's `$60.5 million` California age-pricing settlement is real.
- AI-assisted deception and deepfake-driven trust erosion are real and growing.
- Privacy and data-sharing concerns are materially substantiated.
- Accessibility and marginalized-user risk deserve explicit treatment.
- UK usage decline and Bumble's `Q3 2025` paying-user decline are real and relevant.

### Partially verified or directionally supported

- The claim that dating-app incentives are structurally misaligned with user outcomes is strongly supported as an inference, but internal optimization goals are not fully transparent.
- The claim that Hinge sharply reduced free likes is directionally true, but the specific figure cited elsewhere (`7 per week`) is not verified; the best supported public figure is roughly `8 per day`.
- International and cultural mismatch is clearly real, but the supporting evidence is uneven by region and varies in quality.
- Claims that newer entrants such as Thursday or personality-led apps failed for specific reasons are directionally interesting, but case-by-case causal explanations are often weakly sourced.

### Not incorporated due to insufficient verification

- shadowbanning claims presented as established fact
- exact match-rate tables such as `0.6%` vs `10%` without primary sourcing
- the claim that the median man must swipe `~30,000` profiles to get one relationship
- exact retention tables such as `65-69%` deleting within the first month, `5-7%` day-30 retention, and `3.3%` twelve-month retention without strong primary evidence
- broad fake-profile claims such as `95% fake profiles` on specific apps without defensible sourcing
- overly specific niche-app postmortems that rely mainly on app-store anecdotes or commentary

## 5. Topic B: Data-Backed Predictors of Healthy and Lasting Relationships

## 5.1 Commitment and relationship intent

### Evidence

- A 2020 PNAS project applied machine learning to `43` longitudinal datasets from `29` laboratories covering `11,196` couples.
- The top relationship-specific predictors of relationship quality were:
  - perceived partner commitment
  - appreciation
  - sexual satisfaction
  - perceived partner satisfaction
  - conflict
- In those datasets, relationship-specific variables predicted up to `45%` of variance at baseline and up to `18%` at follow-up.
- A systematic review of long-term marital stability identified commitment as a central protective factor.

### Interpretation

Commitment is one of the most defensible predictors available. Not vague romantic optimism, but perceived seriousness, investment, and intent to endure.

### Delfa implication

- Profiler should directly assess seriousness, exclusivity expectations, readiness, and willingness to invest.
- Matching should strongly down-rank intent mismatches.
- Product mechanics should make commitment legible through follow-through behavior.

## 5.2 Attachment security

### Evidence

- A 2021 dyadic study of `1,014` Dutch couples found that actor and partner attachment avoidance and anxiety explained:
  - `46.2%` of variance in relationship satisfaction
  - `17.9%` of variance in relationship instability
- Actor avoidance was the strongest negative association with relationship satisfaction.
- The same study concluded attachment insecurity explained about `2.5x` more variance in satisfaction than instability.
- Meta-analytic and review literature consistently links attachment anxiety and avoidance with poorer relationship quality.

### Interpretation

Attachment is not a niche therapy concept here; it is one of the highest-signal domains for long-term relationship functioning.

### Delfa implication

- The profiler should indirectly assess attachment-related patterns:
  - reassurance needs
  - closeness vs distance
  - withdrawal tendencies
  - fear of abandonment
  - trust and availability expectations
- These should be measured through scenarios and recent behavior, not explicit labels.

## 5.3 Conflict patterns and repair capacity

### Evidence

- The PNAS analysis identified conflict among the strongest relationship-specific predictors.
- The marital stability systematic review identified communication and conflict resolution approach as core protective factors.
- Financial-strain research on `414` newlywed couples found contextual stress predicted more negative communication independent of relationship satisfaction.

### Interpretation

Conflict itself is not the only issue; how conflict is handled matters. Repair attempts, accountability, de-escalation, and responsiveness under stress are materially linked to relationship quality.

### Delfa implication

- Profiler should assess:
  - how users actually behave in disagreements
  - whether they pursue, withdraw, stonewall, blame, or repair
  - whether they seek resolution quickly or need space
- Guided conversation prompts can test this domain behaviorally over time.

## 5.4 Appreciation and partner responsiveness

### Evidence

- The PNAS study ranked appreciation as one of the top relationship-specific predictors.
- The same PNAS study also found perceived partner responsiveness among the most successful recurring constructs across datasets.
- A longitudinal study of new parents found lower perceived provision and receipt of responsiveness predicted declines in relationship satisfaction; under lower stress, higher responsiveness forecasted increases in satisfaction.
- Research on `capitalization` found that perceived partner responses to positive events were strongly associated with relationship well-being, over and above support during negative events.
- A `2025` meta-analysis of `39` studies covering `15,177` participants found that shared relational humor was strongly associated with relationship satisfaction, commitment, and closeness, with relational humor showing the strongest effects.

### Interpretation

Feeling understood, validated, and cared for is a core process variable in healthy long-term relationships. Claude's research surfaced an important extension that holds up: healthy bonds are not only built through support during stress, but also through how partners respond to each other's good news and shared playfulness.

### Delfa implication

- The profiler should assess responsiveness tendencies, empathy, and attunement.
- The profiler should also assess:
  - how someone responds to a partner's excitement or success
  - whether they amplify, minimize, or redirect attention away from the other person
  - comfort with playfulness, teasing style, and shared levity
- The app should capture responsiveness behaviorally:
  - reply quality
  - consistency
  - acknowledgment of prompts
  - supportiveness under difficult or vulnerable exchanges
  - enthusiasm toward positive disclosures
  - ease of creating shared humor

## 5.5 Emotional stability / low neuroticism

### Evidence

- A systematic review and meta-analysis on personality and marital satisfaction reported a negative correlation between neuroticism and marital satisfaction (`r = -0.439`), and positive correlations for conscientiousness, agreeableness, openness, and extraversion.
- Additional longitudinal evidence from MIDUS-linked work shows neuroticism remains a robust negative correlate, while conscientiousness and emotional stability are positive correlates of marital satisfaction.

### Interpretation

Emotional volatility, threat sensitivity, and poor self-regulation create persistent strain. Reliability and steadiness support better long-term functioning.

### Delfa implication

- The profiler should not ask "Are you emotionally stable?"
- Instead it should measure:
  - reactivity under disappointment
  - impulsivity vs steadiness
  - emotional recovery speed
  - consistency of daily behavior

## 5.6 Sexual satisfaction and intimacy fit

### Evidence

- The PNAS analysis ranked sexual satisfaction among the strongest relationship-quality predictors.
- A longitudinal study across the first `4-5` years of `207` marriages found sexual satisfaction and relationship satisfaction were bidirectionally associated over time.
- The marital stability systematic review also identified sexual relationship as a major protective factor.

### Interpretation

Sexual compatibility is not merely an "extra." It is intertwined with overall relationship satisfaction, especially in long-term bonds.

### Delfa implication

- The profiler should include private intimacy modules covering:
  - comfort with affection
  - desire for physical closeness
  - sexual values
  - libido range
  - boundaries
  - attitudes toward exclusivity and experimentation

## 5.7 Values, worldview, and life-goal alignment

### Evidence

- The long-term marital stability systematic review identified spirituality/religion, children, and shared beliefs among prominent protective factors.
- Pew 2020 found users place meaningful importance on learning whether a prospective partner has children, as well as their religious beliefs and relationship intent.
- Research on joint goals in couples links shared goals with relationship satisfaction, goal progress, and couple-level functioning.

### Interpretation

Long-term relationship quality is not only about chemistry. It depends heavily on whether two people want compatible lives.

### Delfa implication

- Profiler domains should include:
  - children and parenting intent
  - marriage views
  - religion/spirituality
  - geography and relocation
  - career ambition
  - daily lifestyle rhythms
  - long-term life design

## 5.8 Stress load and financial coping

### Evidence

- In a study of `414` ethnically diverse newlywed couples, a latent factor combining financial strain and stressful life events was the strongest correlate of negative communication.
- The same study found contextual stress predicted more negative communication independent of relationship satisfaction.
- Related responsiveness research shows that even otherwise positive supportive behavior can lose its benefits under high chronic stress.

### Interpretation

Couples do not function in a vacuum. Stress, money pressure, and overload materially change how they communicate and how resilient the bond is.

### Delfa implication

- Profiler should assess:
  - financial style
  - debt tolerance
  - spending vs saving tendencies
  - stress coping style
  - need for reassurance vs space under pressure

## 6. What Not to Overweight

The evidence does not support making Delfa primarily about:

- broad hobby overlap
- endless photo-first browsing
- static self-descriptions of virtue
- one-time intake questionnaires with no behavioral learning
- assumption that more matches improve odds

Inference from the evidence:

What matters most is not generic profile richness, but the quality of signal around relationship process, intent, stress behavior, and mutual fit.

Some of the strongest signals are `interactional`, not static:

- responsiveness to good news
- repair attempts during tension
- shared humor and playfulness
- consistency over repeated interactions

That means Delfa should treat the profiler as necessary but incomplete, then use match-stage interaction data to refine fit.

## 7. Profiler Architecture Recommended for Delfa

## 7.1 Highest-Priority Profiler Domains

These should be treated as core ranking inputs:

1. Relationship intent and commitment readiness
2. Attachment/security patterns
3. Conflict and repair tendencies
4. Responsiveness and empathy
5. Emotional stability and self-regulation
6. Values / worldview / family goals
7. Lifestyle and financial compatibility
8. Sexual and intimacy compatibility
9. Stress and coping patterns

## 7.2 Recommended Question Design

Avoid:

- moralized self-ratings
- "best self" questions
- anything easily answered performatively

Prefer:

- scenario-based questions
- forced tradeoffs
- recent-behavior questions
- rankings and pairwise choices
- consistency checks over time
- positive-event response scenarios
- humor and playfulness calibration
- calibration from behavior and graceful disconnects

## 7.3 Example Topic-to-Question Mapping

- Commitment / intent:
  - "When dating goes well, what pace feels right to you in the first two months?"
- Conflict / repair:
  - "After an argument, what do you usually do first?"
- Attachment:
  - "If someone you are dating becomes less communicative for two days, what is your default interpretation?"
- Responsiveness:
  - "When someone shares something vulnerable, what do you tend to do next?"
- Positive-event responsiveness:
  - "If someone you are dating shares exciting news, what do you naturally do first?"
- Humor / playfulness:
  - "Which feels most connecting to you in a relationship: playful teasing, warm silliness, deep conversation, or calm steadiness?"
- Stress / finances:
  - "When money becomes tight, what tends to happen to your mood and communication?"
- Values / life goals:
  - "Which future mismatch would be hardest to compromise on: children, geography, religion, or lifestyle pace?"

## 8. Product Design Implications for Delfa

## 8.1 Features strongly supported by the evidence

- `One active match at a time`
  - justified by burnout, overload, repetitive low-signal chatting, and choice overload findings

- `Graceful disconnect`
  - justified by ghosting prevalence, desire for closure, and the need for calibration data

- `Progressive profiling`
  - justified by dishonesty concerns and the weakness of one-shot self-report

- `Intent-first matching`
  - justified by high user demand for relationship-goal clarity

- `Trust and safety as a core product layer`
  - justified by harassment, scam, stalking, and privacy concerns

- `Behavioral learning`
  - justified by the fact that relationship-quality change is not well predicted from static baseline self-report alone

- `Guided interaction prompts`
  - justified by the fact that some of the strongest relationship signals emerge through live interaction rather than intake-only profiling

## 8.2 Features that would undermine the evidence base

- unlimited swiping
- boosts / paid visibility
- monetizing more matches
- purely photo-first ranking
- public rejection labels
- high-friction 100-question onboarding before value is shown

## 9. Confidence Levels

## 9.1 High confidence

- swipe/choice fatigue is real and strategically important
- ghosting, harassment, scams, and deception are material user pain points
- commitment, attachment, conflict, responsiveness, and sexual satisfaction are strong relationship predictors
- intent clarity should be central to matching

## 9.2 Medium confidence

- exact weighting among profiler domains for Delfa's algorithm
- degree to which specific values domains should be hard filters vs soft ranking
- the best cadence for re-profiling and behavioral recalibration

## 9.3 Lower confidence / requires Delfa-specific testing

- optimal number of guided prompts per match stage
- exact premium/free feature split
- how strongly to use behavioral attraction signals vs stated preferences

## 10. Topic C: What Works Well in Current Dating Apps

This section catalogs evidence-backed features and design patterns from existing dating apps that Delfa should learn from, adapt, or deliberately avoid. Research was conducted across three domains: safety and trust, UX/UI design, and matching algorithms.

### 10.1 Safety and Trust Features

#### 10.1.1 Photo and identity verification

- **Tinder Face Check** (mandatory facial verification) reduced exposure to bad actors by over `60%` and reports of harmful behavior by over `40%` after mandatory rollout in seven countries. Uses video selfie to create an encrypted, non-reversible "FaceMap" compared against profile photos. As of late 2025, mandatory for all new users in those regions.
- **Bumble Photo Verification** uses pose-matching (from 100 options) reviewed by AI and human moderators. Mandatory in the U.S. AI liveness detection analyzes micro-movements, eye blinking, and facial expressions, reportedly blocking `60%` of catfishing attempts.
- **Hinge** rolling out Face Check (shared Match Group technology) as of February 2026.
- **Key finding**: Mandatory verification (not optional) is what produces measurable results. Optional badges do not meaningfully change ecosystem trust.

#### Delfa implication

- Verification must be mandatory at signup, not optional.
- Multi-factor approach (biometric + document) is strongest, but progressive gating can ease onboarding friction.
- Verification should be treated as core product infrastructure, not a premium feature.

#### 10.1.2 AI nudges for behavior change

- **Tinder "Are You Sure?" (AYS)**: AI detects potentially offensive language before sending and prompts user to reconsider. Reduced inappropriate language by over `10%`, and users who saw the prompt were less likely to be reported for inappropriate messages over the following month — indicating lasting behavior change. Endorsed by RAINN.
- **Tinder "Does This Bother You?"**: Checks in with recipients about flagged messages. Reports of inappropriate messages increased `46%` (more empowered reporting, not more harassment).
- **Bumble Private Detector**: AI detects and blurs unsolicited nude images with `98%` accuracy. Users choose to view or block. Bumble open-sourced this technology.

#### Delfa implication

- Pre-send nudges change behavior upstream — more effective than post-hoc moderation alone.
- Recipient check-ins empower reporting without creating a surveillance atmosphere.
- Image scanning should be built in from day one, not retrofitted.

#### 10.1.3 Real-time date safety

- **Noonlight + Tinder**: Users input date details, share live location, and can trigger a panic button that alerts a certified dispatcher who escalates to police if needed.
- **Timer-based check-ins** (bSafe model): Auto-alert if user doesn't check in by a set time — arguably more effective than a panic button, since a user in danger may not be able to reach their phone.
- **Bumble**: Location sharing with trusted contacts during dates.

#### Delfa implication

- Timer-based auto-alerts are preferable to panic buttons alone.
- Date safety should be integrated, not delegated to a third-party app.

#### 10.1.4 Background checks — failed experiment

- Garbo partnered with Tinder (2022-2023) offering criminal background checks. Partnership ended August 2023.
- Reasons: sexual violence is rarely reported, criminal records are a poor proxy for safety, and the approach reproduces systemic bias in the justice system.
- Industry consensus: background checks provide false security with equity concerns.

#### Delfa implication

- Do not pursue criminal background check integrations. Focus verification on identity authenticity, not criminal history.

#### 10.1.5 LGBTQ+ safety features

- **Grindr**: Discreet app icons, automatic distance-feature disabling in hostile countries, distance obfuscation.
- **Tinder Traveler Alert**: Warns LGBTQ+ users entering countries with anti-LGBTQ laws.
- **Privacy risk**: Research found Tinder, Grindr, and OkCupid share location data with advertising platforms — a significant safety risk for LGBTQ+ users in hostile environments.

#### Delfa implication

- Discreet mode and location obfuscation are non-negotiable for LGBTQ+ safety.
- Minimize data sharing with third parties, especially location data.

#### 10.1.6 Safety features women value most

- Survey: `91%` of single women in America worried about safety when dating; `44%` had felt unsafe on a recent date; `75%` believe dating apps must do more.
- Most valued features: unmatch mechanism, location sharing with friends, women-first messaging model, unsolicited image protection, check-in/timer features.
- **Key finding**: Safety warnings alone do NOT change behavior. Structural/technological features are what matter, not advisory text.

### 10.2 UX/UI Design Features

#### 10.2.1 Onboarding

- **Tinder**: Limits initial registration choices strategically — shows Facebook and phone number first, hides email behind "Trouble Logging In?". Reduces decision paralysis.
- **Bumble**: Embeds a background video tutorial showing swiping/chatting, teaching new users without an explicit tutorial.
- **Key principles**: Design onboarding like a conversation, not an interrogation. Start with the lightest step (name + one photo), then progressively add details. Users should reach core value within 30 seconds.

#### Delfa implication

- Progressive onboarding aligned with Delfa's progressive profiling model.
- Front-load emotional payoff (e.g., showing potential match quality early), not lengthy questionnaires.

#### 10.2.2 Profile creation

- **Hinge**: 6 photos + 3 prompts + demographics. 150+ unique prompts rotated to prevent repetitive responses. Provides enough personality insight without overwhelming choice paralysis.
- **Coffee Meets Bagel (CMB)**: Redesigned to emphasize text over big action buttons. Members who sent comments had `25%` higher chance of getting liked back, and comments that led to conversations produced `60%` more messages exchanged.
- **Key stat**: `52%` of users report having trouble selecting profile images; users 18-24 spend an average of `33 minutes` choosing a profile photo.

#### Delfa implication

- AI-assisted photo selection could remove a major friction point.
- Prompts should be specific enough to spark genuine conversation, not generic.
- Progressive profile building (add prompts over time) aligns with Delfa's philosophy.

#### 10.2.3 Matching beyond swiping

- **Hinge comment system**: Users respond to specific prompts or photos instead of binary swipe. Engagement increases when users comment on specifics vs. sending generic likes.
- **CMB curated daily matches**: Limited daily "Bagels" using a deep neural network with 9 separate models. `86%` of users cite quality-over-quantity as their reason for choosing CMB. Fights decision fatigue.
- **Bumble women-first**: Women must message first within 24 hours. Yellow timer ring shows remaining time. Reduces unwanted messages and flips power dynamic.
- **Known**: AI-based chat interface interviews users about interests/values, then pairs them with one person — completely eliminating swipe.

#### Delfa implication

- One-at-a-time matching is evidence-aligned with CMB's quality-over-quantity finding.
- Guided interaction (Hinge-style prompts) produces measurably better conversations.
- Eliminating the swipe paradigm entirely is viable and being done by new entrants.

#### 10.2.4 Notification and engagement design

- Personalized notifications: `52%` of consumers would switch apps if notifications aren't personalized. Push notifications can increase 90-day retention by `190%`.
- **Hinge's ethical approach**: Measures success by "great dates" (number of users who delete the app because they found someone), not time-in-app.

#### Delfa implication

- Metric should be "successful match completion" or "dates generated", not DAU or session length.
- Notifications should advance match progress, not drive re-engagement for its own sake.

#### 10.2.5 Ethical gamification

- **Hinge anti-gamification model**: No rules, timers, or games. No streaks. Revenue jumped `35%` in 2024 despite explicitly trying to get users off the app.
- **Anti-patterns**: Highly gamified apps (Tinder, Badoo) drive `90 minutes` daily across `10-11` separate log-ins. Match streaks and time-sensitive visibility boosts transform emotional interaction into competitive tasks.

#### Delfa implication

- Gamification of dating is explicitly anti-Delfa. No streaks, no competitive mechanics, no virtual currencies.
- Revenue growth can coexist with user-first design (Hinge proves this).

#### 10.2.6 AI features — what's working and what's not

- **Tinder Photo Selector**: AI curates profile photos from camera roll. `68%` of users said an AI photo selection feature would be helpful.
- **Hinge Prompt Feedback**: AI nudges users to improve prompt responses.
- **Critical caveat**: Nearly `50%` of respondents said AI didn't move the needle. Gen Z is especially uncomfortable with AI drafting profile prompts or responding to messages. AI should augment, not replace, human authenticity.

#### Delfa implication

- AI should reduce friction (photo selection, profile coaching) but never speak on behalf of the user.
- Transparency about where AI is used is critical for trust.

#### 10.2.7 Voice and audio features

- **Hinge voice prompts**: Audio answers on profiles add personality and warmth that text cannot. Audio provides "a richer dating experience without the stresses of video."
- **Bumble audio notes**: Voice notes in chat add emotional nuance.
- **Key stat**: `48%` of dating app users said they would feel more comfortable meeting someone offline if they had a video or voice call first.
- **Note**: Hinge removed in-app video/audio calling post-pandemic, suggesting video dates inside the app may not be as valued as voice prompts and voice notes.

#### Delfa implication

- Voice prompts on profiles and voice notes in chat are high-value, low-friction features.
- Full in-app video calling may be over-engineered — voice is sufficient.

#### 10.2.8 Accessibility

- **Tinder 2026 update**: Optimized haptic feedback and Alt Text so visually impaired users can hear descriptions of potential matches' photos.
- **Dateability**: Users select accessibility needs directly on profile, eliminating disclosure anxiety.
- **Key requirements**: Alternatives to swipe-based interactions (significant obstacle for motor disabilities), screen-reader compatibility, customizable text size and contrast.

#### Delfa implication

- Non-swipe interaction model naturally improves motor accessibility.
- Photo Alt Text and screen-reader support should be built in from the start, not retrofitted.

### 10.3 Matching Algorithms and Compatibility

#### 10.3.1 Hinge's Most Compatible (Gale-Shapley basis)

- Built on the Nobel Prize-winning **Gale-Shapley stable matching algorithm** (1962). Predicts mutual compatibility — not just who you'll like, but who will like you back.
- Hinge reports `8x` higher date rate with Most Compatible matches vs. standard browsing.
- Uses machine learning to build a personal "taste profile" from likes, passes, and engagement patterns, making preference rankings dynamic rather than static.

#### Delfa implication

- Mutual interest prediction is strongly preferable to one-sided attractiveness ranking.
- Gale-Shapley variant is appropriate for Delfa's one-at-a-time model.

#### 10.3.2 OkCupid's question-based matching

- Match percentage calculated as the geometric mean of both users' satisfaction scores across answered questions. Users assign importance weights (Irrelevant = 0, Mandatory = 250).
- Most transparent algorithm in the industry.
- **Critical finding (2014 experiment)**: OkCupid told `30%` matches they were `90%` matches. The mere label of high compatibility increased messaging rates and nearly doubled conversation rates. The placebo effect of believing you're compatible significantly drives behavior.
- **Academic criticism**: Sociologist Kevin Lewis found no evidence that high match percentage reliably translates to relationship success. The algorithm finds similar people, which isn't necessarily the same as a good partner.

#### Delfa implication

- User confidence in the algorithm matters as much as the algorithm's accuracy. Explain match reasoning transparently.
- Similarity-based matching alone is insufficient. Process variables (how people interact) matter more.

#### 10.3.3 eHarmony's 32-dimension model

- Created by clinical psychologist Dr. Neil Clark Warren from studying happy couples. Dimensions include emotional temperament, social style, cognitive mode, conflict resolution, etc.
- **No independent, peer-reviewed validation** of the 32-dimension model has been published.
- Critics argue results likely reflect the "person effect": agreeable, non-neurotic, optimistic people fare better in any relationship.

#### Delfa implication

- Personality-based compatibility models have face validity but lack rigorous evidence.
- Delfa should focus on relationship process variables (from Topic B research) rather than static personality dimensions.

#### 10.3.4 Behavioral matching — revealed vs. stated preferences

- Modern algorithms prioritize "revealed preferences" (what you actually do) over stated preferences. Research consistently shows poor match between stated and revealed preferences.
- Example: people rank "good lover" 12th in stated importance, but it's the #1 predictor of actual attraction in speed-dating studies.
- Collaborative filtering creates feedback loops that concentrate recommendations on popular profiles, inherently disfavoring minority users.

#### Delfa implication

- Behavioral signals are more reliable than stated preferences, but must include bias guardrails.
- Collaborative filtering needs fairness constraints (Nash Social Welfare optimization) to avoid concentrating attention on a small set of "popular" users.

#### 10.3.5 Values-based matching — promising but unvalidated

- `65%` of lasting couples cite aligned goals as a key factor (Pew 2023).
- Hinge reports compatible values reduce conflicts by `30%`.
- No app has published peer-reviewed evidence that its specific values-matching implementation leads to better relationships.

#### Delfa implication

- Values alignment is theoretically strong and should be a core matching dimension.
- Delfa can differentiate by actually measuring relationship outcomes tied to values matching.

#### 10.3.6 The meta-evidence on algorithmic matching

- **Finkel et al. (2012) meta-analysis**: No compelling evidence any online dating matching algorithm actually works. The strongest predictors of relationship success (interaction style, conflict navigation, stress coping) cannot be assessed before two people meet.
- **OkCupid 2014**: The placebo effect of match labels is roughly as powerful as actual algorithmic compatibility.
- **50-country study (2025)**: Couples who met online reported lower relationship satisfaction and lower love intensity than those who met offline.
- **What does have evidence**: Constraining choice (CMB model), mutual-interest optimization (Hinge), dealbreaker filtering on genuinely incompatible traits, and user belief in the algorithm.

#### Delfa implication

- Pre-meeting algorithms have a ceiling. Delfa's competitive advantage should be in the interaction stage — guiding how matched people communicate and discover compatibility.
- The one-at-a-time model with guided prompts addresses the strongest evidence gap: algorithms can't predict chemistry, but they can create better conditions for discovering it.
- Algorithm transparency builds trust, and trust improves outcomes (placebo effect).

### 10.4 Summary of Delfa-relevant takeaways from Topic C

Features Delfa should adopt or adapt:

- Mandatory identity verification at signup
- Pre-send AI nudges for messaging behavior
- Unsolicited image detection and blurring
- Timer-based date safety check-ins
- Prompt-based profiles over freeform bios
- Voice prompts and voice notes
- AI-assisted photo selection
- Mutual-interest prediction (Gale-Shapley variant)
- Values-based matching with behavioral calibration
- Non-swipe interaction model
- Accessibility from day one (Alt Text, screen reader, no swipe dependency)
- Algorithm transparency and match explanation

Features Delfa should explicitly reject:

- Gamification (streaks, virtual currencies, competitive mechanics)
- Infinite browsing / swipe stacks
- Paid visibility boosts
- Background check integrations
- AI that speaks on behalf of users
- Full in-app video calling (voice is sufficient)
- Engagement metrics as success metrics (measure dates, not DAU)

### 10.5 Research gaps — topics requiring follow-up

The following research areas were initiated but did not complete due to rate limits. They should be investigated in a follow-up pass:

- **Tinder-specific feature deep dive**: Detailed analysis of Tinder's full feature set, what users praise, and what Match Group investor materials reveal about feature effectiveness
- **Bumble-specific feature deep dive**: Detailed analysis of Bumble's full feature set and women-first model effectiveness data
- **Dating app communication features**: Best practices for in-app messaging, conversation pacing, and chat UX
- **Niche dating app innovations**: Features from smaller apps (Thursday, Feeld, The League, Raya, etc.) that address specific use cases
- **Dating app success stories and data**: Quantitative data on app-to-relationship conversion rates, which apps produce the most lasting relationships
- **IRL events and meetup features**: Whether app-organized events improve outcomes

## 11. Decision Rules for Delfa

Use the evidence above as the default decision framework:

- If a feature increases `volume` but not `clarity`, reject it.
- If a question invites image-management instead of honesty, redesign it.
- If a monetization idea rewards addiction mechanics, reject it.
- If a matching input is relationship-process relevant, prioritize it over low-signal profile cosmetics.
- If a safety feature reduces ambiguity or predatory behavior, treat it as product value, not overhead.
- If an algorithm cannot be explained to the user, add transparency before shipping it.
- If a feature works for accessibility, it likely works better for everyone.

## 12. Sources

### Dating app complaints and market pain points

- Pew Research Center, 2023: [The experiences of U.S. online daters](https://www.pewresearch.org/internet/2023/02/02/the-experiences-of-u-s-online-daters/)
- Pew Research Center, 2020: [Users of online dating platforms experience both positive and negative aspects of courtship on the web](https://www.pewresearch.org/internet/2020/02/06/users-of-online-dating-platforms-experience-both-positive-and-negative-aspects-of-courtship-on-the-web/)
- Forbes Health / OnePoll, 2025: [Survey: 78% Of All Users Report Dating App Burnout](https://www.forbes.com/health/dating/dating-app-fatigue/)
- Computers in Human Behavior, 2021: [The agony of partner choice: The effect of excessive partner availability on fear of being single, self-esteem, and partner choice overload](https://www.sciencedirect.com/science/article/pii/S0747563221003009)
- BMC Psychology, 2020: [Swipe-based dating applications use and its association with mental health outcomes: a cross-sectional study](https://link.springer.com/article/10.1186/s40359-020-0373-1)
- Journal of Communication, 2018 / Stanford summary: [Deception in mobile dating conversations](https://academic.oup.com/joc/article/68/3/547/4986443)
- International Journal of Mental Health and Addiction, 2021: [Online Dating and Problematic Use: A Systematic Review](https://link.springer.com/article/10.1007/s11469-020-00318-9)
- Current Opinion in Psychology / PubMed, 2023: [Dating Apps: A New Emerging Platform for Sexual Harassment? A Scoping Review](https://pubmed.ncbi.nlm.nih.gov/37036157/)
- FTC, 2023: [New FTC Data Reveals Top Lies Told by Romance Scammers](https://www.ftc.gov/news-events/news/press-releases/2023/02/new-ftc-data-reveals-top-lies-told-romance-scammers)
- FTC, 2025: [Match Group Agrees to Pay $14 Million, Permanently Stop Deceptive Advertising, Cancellation, and Billing Practices to Resolve FTC Charges](https://www.ftc.gov/news-events/news/press-releases/2025/08/match-group-agrees-pay-14-million-permanently-stop-deceptive-advertising-cancellation-billing)
- FTC, 2019: [FTC Sues Owner of Online Dating Service Match.com for Using Fake Love Interest Ads To Trick Consumers into Paying](https://www.ftc.gov/news-events/news/press-releases/2019/09/ftc-sues-owner-online-dating-service-matchcom-using-fake-love-interest-ads-trick-consumers-paying)
- Mozilla Foundation / Consumers International, 2022: [New Research: Tinder’s Opaque, Unfair Pricing Algorithm Can Charge Users Up to Five-Times More For Same Service](https://www.mozillafoundation.org/en/blog/new-research-tinders-opaque-unfair-pricing-algorithm-can-charge-users-up-to-five-times-more-for-same-service/?form=eoy-banner-HL1)
- Consumers International, 2022: [A Consumer Investigation Into Personalised Pricing](https://www.consumersinternational.org/media/369078/personalised_pricing_15_02_2022.pdf)
- Mozilla Foundation, 2024: [Data-Hungry Dating Apps Are Worse Than Ever for Your Privacy](https://www.mozillafoundation.org/en/privacynotincluded/articles/data-hungry-dating-apps-are-worse-than-ever-for-your-privacy/)
- Datatilsynet, 2025: [The Court of Appeal upholds the fine against Grindr](https://www.datatilsynet.no/en/news/news-2025/the-court-of-appeal-upholds-the-fine-against-grindr/)
- Scientific American, 2025: [The Rise of AI ‘Chatfishing’ in Online Dating Poses a Modern Turing Test](https://www.scientificamerican.com/article/the-rise-of-ai-chatfishing-in-online-dating-poses-a-modern-turing-test/)
- Global Dating Insights / Sumsub survey, 2026: [Deepfakes Drive UK Dating App Mistrust for 84% of Singles](https://www.globaldatinginsights.com/featured/deepfakes-drive-uk-dating-app-mistrust-for-84-of-singles/)
- Australian Federal Police, 2026: [ClickFit: Romance scams](https://www.afp.gov.au/news-centre/feature/clickfit-romance-scams)
- Kaspersky, 2024: [Nearly a quarter of online daters experience digital stalking](https://usa.kaspersky.com/about/press-releases/nearly-a-quarter-of-online-daters-experience-digital-stalking)
- AudioEye, 2024: [Why “Swiping Right” Doesn’t Work for People with Disabilities](https://www.audioeye.com/post/swiping-right-doesnt-work/)
- Human Rights Watch, 2024: [Questions and Answers: Facebook, Instagram, and Digital Targeting of LGBT People in MENA](https://www.hrw.org/news/2024/01/23/questions-and-answers-facebook-instagram-and-digital-targeting-lgbt-people-mena)
- Time, 2019: [Tinder's Newest Feature Aims to Keep LGBTQ People Safer Across the World](https://time.com/5633974/tinder-lgbtq-safety-feature/)
- Ofcom, 2025: [’Appy Valentine's Day: top online dating trends revealed](https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/appy-valentines-day-top-online-dating-trends-revealed)
- Ofcom, 2024: [Online Nation 2024 Report](https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/online-research/online-nation/2024/online-nation-2024-report.pdf?_bhlid=ca05028c9fe07a6f729c617cb5ce4e9f92181a60&v=386238)
- Bumble Inc., 2025: [Bumble Inc. Announces Third Quarter 2025 Results](https://ir.bumble.com/news/news-details/2025/Bumble-Inc--Announces-Third-Quarter-2025-Results/default.aspx)
- Hinge Help Center, 2026: [Is Hinge free?](https://help.hinge.co/hc/en-us/articles/360010947994-Is-Hinge-free)
- Hinge Help Center, 2026: [Subscription and Purchase Benefits](https://help.hinge.co/hc/en-us/articles/38014282744595-Subscription-and-Purchase-Benefits)
- California Tinder settlement site, 2026: [Candelore v. Tinder, Inc.](https://www.tindercalclassaction.com/)
- Australian Government, 2024: [New industry code now operational to make online dating safer](https://www.infrastructure.gov.au/department/media/news/new-industry-code-now-operational-make-online-dating-safer)
- California State Senate, 2026: [Senator Pérez introduces legislation to make online dating safer for millions of Californians](https://sd25.senate.ca.gov/news/senator-perez-introduces-legislation-make-online-dating-safer-millions-californians)

### Relationship science and lasting relationship predictors

- PNAS / PMC, 2020: [Machine learning uncovers the most robust self-report predictors of relationship quality across 43 longitudinal couples studies](https://pmc.ncbi.nlm.nih.gov/articles/PMC7431040/)
- Journal of Marital and Family Therapy / PMC, 2021: [Satisfying and stable couple relationships: Attachment similarity across partners can partially buffer the negative effects of attachment insecurity](https://pmc.ncbi.nlm.nih.gov/articles/PMC8359179/)
- Systematic review, 2019: [Protective factors of marital stability in long-term marriage globally](https://pmc.ncbi.nlm.nih.gov/articles/PMC6702121/)
- Personality and marital satisfaction meta-analysis, 2020: [The relationship between personality traits and marital satisfaction: a systematic review and meta-analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC7006385/)
- Journal of Personality and Social Psychology, 2004: [What do you do when things go right? The intrapersonal and interpersonal benefits of sharing positive events](https://pubmed.ncbi.nlm.nih.gov/15535797/)
- Current Psychology, 2025: [Humour and relationship quality in romantic couples: A meta-analysis](https://link.springer.com/article/10.1007/s12144-025-08026-3)
- Journal of Family Psychology PDF, 2021: [Responsiveness and relationship satisfaction across the transition to parenthood](https://socialinteractionlab.psych.umn.edu/sites/socialinteractionlab.psych.umn.edu/files/2021-08/Smallen%20et%20al.%2C%202021%20%28JFP%29.pdf)
- PMC, 2013: [Financial Strain and Stressful Events Predict Newlyweds' Negative Communication Independent of Relationship Satisfaction](https://pmc.ncbi.nlm.nih.gov/articles/PMC3667200/)
- PMC, 2016: [Longitudinal Associations among Relationship Satisfaction, Sexual Satisfaction, and Frequency of Sex in Early Marriage](https://pmc.ncbi.nlm.nih.gov/articles/PMC4472635/)

### Dating app features, safety, UX, and algorithms (Topic C)

- Tinder Pressroom, 2025: [Tinder to Expand Facial Verification Feature Across the U.S.](https://www.tinderpressroom.com/2025-10-22-Tinder-to-Expand-Facial-Verification-Feature-Across-the-U-S-,-Setting-a-New-Standard-for-Dating-Safety)
- TechCrunch, 2025: [Tinder will require new users in the US to verify their identity with a selfie](https://techcrunch.com/2025/10/22/tinder-will-require-new-users-in-the-us-to-verify-their-identity-with-a-selfie/)
- Bumble, 2026: [Request Verification](https://bumble.com/en-us/the-buzz/request-verification)
- Hinge Newsroom, 2026: [Safer Internet Day 2026](https://hinge.co/newsroom/Safer-Internet-Day-2026)
- Tinder Pressroom, 2021: [Tinder Introduces Are You Sure?](https://www.tinderpressroom.com/2021-05-20-Tinder-Introduces-Are-You-Sure-,-an-Industry-First-Feature-That-is-Stopping-Harassment-Before-It-Starts)
- Bumble, 2026: [Private Detector](https://bumble.com/en-us/the-buzz/privatedetector)
- Bumble, 2026: [Open-Sources Private Detector](https://bumble.com/nb/the-buzz/bumble-open-source-private-detector-ai-cyberflashing-dick-pics)
- Global Dating Insights, 2026: [91% of women want better dating app safety features](https://www.globaldatinginsights.com/news/91-of-women-want-better-dating-app-safety-features-survey-finds/)
- CNN, 2020: [Noonlight + Tinder panic button and safety tools](https://www.cnn.com/2020/01/23/tech/tinder-panic-button-safety-tools)
- TechCrunch, 2023: [Garbo partnership ends](https://techcrunch.com/2023/08/17/match-groups-background-check-partner-garbo-ends-its-partnership/)
- EFF, 2025: [Dating Apps Need to Learn How Consent Works](https://www.eff.org/deeplinks/2025/07/dating-apps-need-learn-how-consent-works)
- Match Group, 2026: [Safety](https://mtch.com/safety/)
- TechCrunch, 2018: [Hinge employs new algorithm to find your Most Compatible match](https://techcrunch.com/2018/07/11/hinge-employs-new-algorithm-to-find-your-most-compatible-match-for-you/)
- Cornell Blogs, 2021: [Hinge and its Implementation of the Gale-Shapley Algorithm](https://blogs.cornell.edu/info2040/2021/09/30/hinge-and-its-implementation-of-the-gale-shapley-algorithm/)
- Skeptical Inquirer, 2014: [Evaluating eHarmony](https://skepticalinquirer.org/2014/11/sweet-science-of-seduction-or-scam-evaluating-eharmony/)
- NPR, 2014: [OkCupid Sometimes Messes A Bit With Love](https://www.npr.org/2014/07/29/336356931/okcupid-sometimes-messes-a-bit-with-love-in-the-name-of-science)
- Finkel et al., 2012: [Online dating: A critical analysis (Psychological Science in the Public Interest)](https://pubmed.ncbi.nlm.nih.gov/26173279/)
- CIO Dive, 2019: [Coffee Meets Bagel dating technology AI and data](https://www.ciodive.com/news/coffee-meets-bagel-dating-technology-ai-data/548395/)
- ScienceDirect, 2025: [50-country study on online vs offline relationship satisfaction](https://www.sciencedirect.com/science/article/pii/S0736585325000711)
- International Economic Review / Chen, 2023: [Recommendation inequality in two-sided matching](https://onlinelibrary.wiley.com/doi/10.1111/iere.12631)
- European Journal of Personality / Zhao et al., 2025: [Stated vs. revealed preferences](https://journals.sagepub.com/doi/10.1177/08902070241286254)
- Creative Review, 2024: [How Hinge Hopes to Resist Gamification of Dating](https://www.creativereview.co.uk/hinge-app-gamification-of-dating/)
- Fast Company, 2025: [Every dating app has AI now](https://www.fastcompany.com/91484596/every-dating-app-has-ai-now-can-it-help-make-better-matches)
- TechCrunch, 2024: [Tinder AI Photo Selection Feature Launches](https://techcrunch.com/2024/07/17/tinder-ai-photo-selection-feature-launches/)
- TechCrunch, 2018: [Coffee Meets Bagel anti-Tinder redesign](https://techcrunch.com/2018/12/11/coffee-meets-bagel-goes-anti-tinder-with-a-redesign-focused-on-profiles-conversations/)
- Accessibility.com, 2026: [How Accessible Are Dating Apps?](https://www.accessibility.com/blog/how-accessible-are-dating-apps)
- BusinessWire, 2025: [Dateability Revolutionizes Accessible Online Dating](https://www.businesswire.com/news/home/20250916011570/en/Dateability-Revolutionizes-Accessible-Online-Dating)
- Pew Research Center, 2024: [48% more comfortable meeting after video/voice call](https://www.pewresearch.org/)
- Norton, 2025: [Romance scam statistics](https://us.norton.com/blog/online-scams/ncsir-dating-scams-2025)
- The Drum, 2024: [Hinge CMO on unconventional KPI — dates so great people delete the app](https://www.thedrum.com/news/hinge-s-cmo-her-unconventional-kpi-dates-so-great-people-delete-the-app)
