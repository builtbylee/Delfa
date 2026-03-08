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

## 4. Topic A Synthesis: Priority Complaint Clusters for Delfa

The strongest complaint clusters, ranked by strategic relevance to Delfa, are:

1. `Burnout from too many low-quality options`
2. `Ghosting and lack of respectful closure`
3. `Dishonesty and low trust`
4. `Safety failures: harassment, scams, stalking`
5. `Ambiguous relationship intent`
6. `Mechanics that reward browsing rather than commitment`

These six areas justify Delfa's proposed core features:

- one active match
- progressive profiling
- graceful disconnect
- intent clarity
- behavioral calibration
- no swipe-first mechanic

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

### Interpretation

Feeling understood, validated, and cared for is a core process variable in healthy long-term relationships.

### Delfa implication

- The profiler should assess responsiveness tendencies, empathy, and attunement.
- The app should capture responsiveness behaviorally:
  - reply quality
  - consistency
  - acknowledgment of prompts
  - supportiveness under difficult or vulnerable exchanges

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

## 10. Decision Rules for Delfa

Use the evidence above as the default decision framework:

- If a feature increases `volume` but not `clarity`, reject it.
- If a question invites image-management instead of honesty, redesign it.
- If a monetization idea rewards addiction mechanics, reject it.
- If a matching input is relationship-process relevant, prioritize it over low-signal profile cosmetics.
- If a safety feature reduces ambiguity or predatory behavior, treat it as product value, not overhead.

## 11. Sources

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
- Kaspersky, 2024: [Nearly a quarter of online daters experience digital stalking](https://usa.kaspersky.com/about/press-releases/nearly-a-quarter-of-online-daters-experience-digital-stalking)

### Relationship science and lasting relationship predictors

- PNAS / PMC, 2020: [Machine learning uncovers the most robust self-report predictors of relationship quality across 43 longitudinal couples studies](https://pmc.ncbi.nlm.nih.gov/articles/PMC7431040/)
- Journal of Marital and Family Therapy / PMC, 2021: [Satisfying and stable couple relationships: Attachment similarity across partners can partially buffer the negative effects of attachment insecurity](https://pmc.ncbi.nlm.nih.gov/articles/PMC8359179/)
- Systematic review, 2019: [Protective factors of marital stability in long-term marriage globally](https://pmc.ncbi.nlm.nih.gov/articles/PMC6702121/)
- Personality and marital satisfaction meta-analysis, 2020: [The relationship between personality traits and marital satisfaction: a systematic review and meta-analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC7006385/)
- Journal of Family Psychology PDF, 2021: [Responsiveness and relationship satisfaction across the transition to parenthood](https://socialinteractionlab.psych.umn.edu/sites/socialinteractionlab.psych.umn.edu/files/2021-08/Smallen%20et%20al.%2C%202021%20%28JFP%29.pdf)
- PMC, 2013: [Financial Strain and Stressful Events Predict Newlyweds' Negative Communication Independent of Relationship Satisfaction](https://pmc.ncbi.nlm.nih.gov/articles/PMC3667200/)
- PMC, 2016: [Longitudinal Associations among Relationship Satisfaction, Sexual Satisfaction, and Frequency of Sex in Early Marriage](https://pmc.ncbi.nlm.nih.gov/articles/PMC4472635/)

