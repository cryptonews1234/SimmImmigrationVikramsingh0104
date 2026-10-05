const updated = 'October 2026';

const clientServiceEnhancements = {
  'express-entry': {
    meta: {
      updated,
      title: 'Express Entry Canada: Eligibility, CRS Score and PR Process',
      description:
        'Complete Express Entry Canada guide covering FSWP, CEC, FSTP, CRS scores, category-based selection, documents, ITAs and permanent residence applications.',
      keywords: ['Express Entry Canada', 'CRS score', 'Canadian Experience Class', 'Federal Skilled Worker Program', 'Canada permanent residence'],
    },
    prose: [
      {
        heading: 'Express Entry Canada overview',
        paragraphs: [
          'Express Entry is the online system used by Immigration, Refugees and Citizenship Canada to manage permanent residence applications under the Federal Skilled Worker Program, Canadian Experience Class and Federal Skilled Trades Program.',
          'Eligible candidates enter a pool and receive a Comprehensive Ranking System score. IRCC then conducts rounds of invitations. Being eligible for the pool does not guarantee an invitation, and receiving an invitation does not remove the need to prove every claim in the permanent residence application.',
        ],
      },
      {
        heading: 'The three Express Entry programs',
        paragraphs: [
          'The Federal Skilled Worker Program is often relevant to skilled workers with qualifying foreign or Canadian experience. The Canadian Experience Class focuses on qualifying Canadian work experience. The Federal Skilled Trades Program is designed for people with experience in eligible skilled trades.',
          'Each program has its own minimum requirements. A profile should be assessed against the program rules before CRS strategy is considered.',
        ],
        links: [
          { label: 'Compare permanent residence pathways', href: '/services/permanent-residence' },
          { label: 'Explore provincial nominations', href: '/services/provincial-nominee-program' },
        ],
      },
      {
        heading: 'How the CRS score works',
        paragraphs: [
          'The Comprehensive Ranking System awards points for core human-capital factors such as age, education, official-language ability and Canadian work experience. Spouse or partner factors, skill transferability and additional factors can also affect the total.',
          'A provincial nomination through an Express Entry-aligned stream adds 600 points. Language improvements, additional eligible work experience, further education and accurate documentation may also change a candidate’s score.',
        ],
      },
      {
        heading: 'Category-based selection',
        paragraphs: [
          'IRCC may invite candidates who meet a category selected to support a specific economic goal. Candidates must still be eligible for an Express Entry program and remain ranked by CRS within the relevant category.',
          'Categories and qualifying occupations can change. For 2026, IRCC lists categories including French-language proficiency and selected health and social services, STEM, trades, education, transport, physician, senior-management, research and military-recruitment profiles. Always confirm the category rules that apply on the date of a draw.',
        ],
      },
      {
        heading: 'Language tests, education and settlement funds',
        paragraphs: [
          'Applicants must use an IRCC-approved English or French test and keep the results valid through the relevant application stage. Foreign education may require an Educational Credential Assessment from an approved organization.',
          'Settlement-fund requirements depend on the program and circumstances. Where funds are required, they must be available, transferable and supported by acceptable financial records.',
        ],
      },
      {
        heading: 'Invitation to Apply and the PR application',
        paragraphs: [
          'An Invitation to Apply gives a candidate a limited period to submit the complete permanent residence application. The evidence must support the information used to establish program eligibility, CRS points and category eligibility.',
          'Employment letters, language results, education records and civil-status documents deserve particular attention. Material inconsistencies or unsupported points can lead to refusal and may raise misrepresentation concerns.',
        ],
      },
    ],
    cards: [
      { title: 'Program eligibility', icon: 'check', items: ['Federal Skilled Worker Program.', 'Canadian Experience Class.', 'Federal Skilled Trades Program.', 'Express Entry-aligned provincial streams.'] },
      { title: 'CRS factors', icon: 'target', items: ['Age and education.', 'English and French test results.', 'Canadian and foreign work experience.', 'Spouse, transferability and additional factors.'] },
      { title: 'Profile readiness', icon: 'file', items: ['Approved language results.', 'ECA for foreign education, where required.', 'Accurate NOC and employment history.', 'Valid passport and personal-history details.'] },
      { title: 'Common application risks', icon: 'eye', items: ['Work letters that do not establish claimed experience.', 'Expired tests or assessments.', 'Incorrect NOC selection.', 'Differences between the profile and final application.'] },
    ],
    documents: {
      heading: 'Express Entry document checklist',
      description: 'The personalized checklist is issued after an invitation and depends on your family and program.',
      items: ['Passport or travel document.', 'Approved language test results.', 'Educational Credential Assessment and education records.', 'Detailed employment reference letters and work evidence.', 'Proof of settlement funds, where required.', 'Police certificates and medical examination confirmation.', 'Marriage, common-law, divorce and birth records, as applicable.', 'Provincial nomination or job-offer records, where claimed.', 'Certified translations and supporting explanations.', 'Additional documents requested by IRCC.'],
    },
    process: [
      { title: 'Confirm eligibility', description: 'Identify at least one qualifying federal program.' },
      { title: 'Prepare credentials', description: 'Complete language testing and the ECA where required.' },
      { title: 'Create the profile', description: 'Enter accurate personal, education and work details.' },
      { title: 'Improve and monitor', description: 'Track CRS, categories and provincial opportunities.' },
      { title: 'Receive an ITA', description: 'Review every claimed point before accepting and filing.' },
      { title: 'Submit permanent residence', description: 'Upload the complete evidence within the deadline.' },
    ],
    why: [
      { letter: 'A', title: 'Program assessment', body: 'Separate minimum eligibility from CRS competitiveness.' },
      { letter: 'B', title: 'CRS review', body: 'Verify the points and identify realistic improvements.' },
      { letter: 'C', title: 'NOC and evidence', body: 'Align work history with detailed supporting records.' },
      { letter: 'D', title: 'ITA support', body: 'Build the final PR package around the claims in the profile.' },
    ],
    faqs: [
      { question: 'What is Express Entry?', answer: 'Express Entry is IRCC’s online system for managing applications under the Federal Skilled Worker Program, Canadian Experience Class and Federal Skilled Trades Program.' },
      { question: 'What is a good CRS score?', answer: 'There is no permanent cut-off. Required scores depend on the candidates in the pool and the type of invitation round.' },
      { question: 'Can I improve my CRS score?', answer: 'Potential options include stronger language results, additional eligible education or work experience, French ability, spouse-factor changes and a provincial nomination.' },
      { question: 'Do I need a Canadian job offer?', answer: 'Not for every Express Entry program. A job offer may be relevant in some situations, but eligibility and CRS treatment depend on the applicable rules.' },
      { question: 'What happens after an Invitation to Apply?', answer: 'You must submit the permanent residence application and documents within the deadline shown in your account. IRCC then verifies eligibility, points, admissibility and the accuracy of the profile.' },
      { question: 'Does category eligibility guarantee an invitation?', answer: 'No. You must also qualify for an Express Entry program and rank high enough within the category-based round.' },
      { question: 'Can a provincial nomination improve my profile?', answer: 'Yes. An accepted Express Entry-aligned provincial nomination adds 600 CRS points.' },
      { question: 'Does Express Entry guarantee permanent residence?', answer: 'No. Pool eligibility, an invitation and final approval are separate stages.' },
    ],
    related: [
      { label: 'Permanent Residence', href: '/services/permanent-residence' },
      { label: 'Provincial Nominee Program', href: '/services/provincial-nominee-program' },
      { label: 'Post-Graduation Work Permit', href: '/services/pgwp' },
    ],
  },

  'provincial-nominee-program': {
    meta: {
      updated,
      title: 'Provincial Nominee Program Canada: PNP Eligibility and Process',
      description: 'Detailed Provincial Nominee Program guide covering Express Entry and non-Express Entry streams, NOC TEER, provincial selection, documents and PR steps.',
      keywords: ['Provincial Nominee Program Canada', 'Canada PNP', 'PNP eligibility', 'provincial nomination', 'PNP Express Entry'],
    },
    prose: [
      {
        heading: 'Provincial Nominee Program overview',
        paragraphs: [
          'The Provincial Nominee Program lets participating provinces and territories nominate people who have the skills, education and work experience needed by their economies and who intend to live in the nominating jurisdiction.',
          'Each jurisdiction controls its own streams, criteria and intake. Alberta, British Columbia, Manitoba, New Brunswick, Newfoundland and Labrador, Northwest Territories, Nova Scotia, Ontario, Prince Edward Island, Saskatchewan and Yukon operate nominee programs. Quebec and Nunavut do not operate a PNP.',
        ],
      },
      {
        heading: 'Express Entry and non-Express Entry pathways',
        paragraphs: [
          'An enhanced nomination is connected to Express Entry. The candidate must qualify for both the provincial stream and one of the three federal Express Entry programs. Accepting the nomination adds 600 CRS points.',
          'A base or non-Express Entry stream operates outside Express Entry. The applicant first obtains the nomination and then applies to IRCC through the non-Express Entry provincial nominee process.',
        ],
        links: [{ label: 'Understand Express Entry', href: '/services/express-entry' }],
      },
      {
        heading: 'How provinces select candidates',
        paragraphs: [
          'Selection may consider occupation, NOC and TEER category, work experience, education, language results, job offer, wage, local ties, Canadian status and the intention to settle in the province.',
          'Some streams accept direct applications or expressions of interest. Others identify candidates from the Express Entry pool. A notification of interest is not a nomination and does not guarantee one.',
        ],
      },
      {
        heading: 'Choosing a province and stream',
        paragraphs: [
          'The best fit depends on the applicant’s occupation, current location, job offer, work authorization, education, language results and settlement plans. Stream availability and targeted occupations can change with little notice.',
          'A useful comparison looks at both immediate eligibility and the evidence needed to show a genuine intention to live in the nominating province.',
        ],
      },
      {
        heading: 'NOC 2021 and TEER',
        paragraphs: ['Provincial programs use the National Occupational Classification and TEER framework. The correct NOC is based on the lead statement and actual duties, not the job title alone.'],
        table: {
          headers: ['TEER', 'General classification'],
          rows: [['0', 'Management occupations'], ['1', 'Usually requires a university degree'], ['2', 'Usually requires college, apprenticeship or supervisory experience'], ['3', 'Usually requires post-secondary education or specialized training'], ['4', 'Usually requires secondary school and job-specific training'], ['5', 'Usually requires short-term work demonstration and no formal education']],
        },
      },
      {
        heading: 'From nomination to permanent residence',
        paragraphs: [
          'A nomination is an important approval at the provincial stage, but it does not grant permanent residence. IRCC still assesses the federal application, including admissibility and whether the nomination remains valid.',
          'Applicants must continue to meet relevant conditions and should disclose changes in employment, family composition, status or settlement plans when required.',
        ],
      },
    ],
    cards: [
      { title: 'Profiles provinces may target', icon: 'target', items: ['Skilled workers and tradespeople.', 'International graduates.', 'Health care and other priority occupations.', 'Entrepreneurs and business applicants.', 'French-speaking candidates.'] },
      { title: 'Selection factors', icon: 'check', items: ['NOC and TEER.', 'Work experience and education.', 'Language proficiency.', 'Job offer or provincial connection, where required.', 'Intention to settle in the province.'] },
      { title: 'Enhanced nomination', icon: 'bolt', items: ['Requires Express Entry eligibility.', 'Nomination is confirmed electronically.', 'Accepted nomination adds 600 CRS points.', 'Federal PR application follows an ITA.'] },
      { title: 'Base nomination', icon: 'route', items: ['Apply under a non-Express Entry provincial stream.', 'Receive the provincial nomination.', 'Submit the federal PR application.', 'Meet federal admissibility requirements.'] },
    ],
    documents: {
      heading: 'PNP documents commonly required',
      description: 'Every province and stream issues its own checklist.',
      items: ['Passport and status documents.', 'Language test results.', 'Education records and ECA, where required.', 'Employment letters and work-experience evidence.', 'NOC and job-description evidence.', 'Job offer and employer records, where applicable.', 'Settlement funds and financial evidence.', 'Provincial connection or intention-to-reside evidence.', 'Nomination certificate and federal forms.', 'Police certificates, medicals and civil-status records.'],
    },
    process: [
      { title: 'Assess provinces', description: 'Compare current streams against your profile and goals.' },
      { title: 'Confirm NOC and TEER', description: 'Match the occupation using duties, not title alone.' },
      { title: 'Prepare the provincial file', description: 'Collect stream-specific eligibility and settlement evidence.' },
      { title: 'Apply or receive interest', description: 'Follow the province’s EOI, direct or Express Entry process.' },
      { title: 'Accept the nomination', description: 'Complete the provincial stage and any profile steps.' },
      { title: 'Apply for PR', description: 'Submit the federal application and admissibility documents.' },
    ],
    why: [
      { letter: 'A', title: 'Stream matching', body: 'Compare open provincial routes instead of relying on one program.' },
      { letter: 'B', title: 'NOC review', body: 'Align duties, experience and provincial occupational criteria.' },
      { letter: 'C', title: 'Settlement evidence', body: 'Document why the nominating province is a credible destination.' },
      { letter: 'D', title: 'Two-stage support', body: 'Prepare both the nomination and federal PR applications.' },
    ],
    faqs: [
      { question: 'What is the Provincial Nominee Program?', answer: 'It allows participating provinces and territories to nominate eligible people who want to settle there and become permanent residents.' },
      { question: 'Which province is best for immigration?', answer: 'There is no universal best province. The fit depends on current streams, your NOC, work history, education, language, job offer and settlement plans.' },
      { question: 'Is a job offer required?', answer: 'Not for every stream. Requirements differ by province and program.' },
      { question: 'What is the difference between enhanced and base PNP?', answer: 'Enhanced streams connect to Express Entry. Base streams use the non-Express Entry federal PR process after nomination.' },
      { question: 'Does a nomination guarantee permanent residence?', answer: 'No. IRCC must still approve the federal application and admissibility assessment.' },
      { question: 'How many CRS points does an Express Entry nomination add?', answer: 'An accepted Express Entry-aligned provincial nomination adds 600 CRS points.' },
      { question: 'Can I apply to more than one province?', answer: 'You may explore more than one program, but your applications and profiles must remain truthful about where you genuinely intend to live. Express Entry allows only one accepted nomination at a time.' },
      { question: 'Do Quebec and Nunavut have PNPs?', answer: 'No. Quebec has separate immigration programs, and Nunavut does not operate a provincial nominee program.' },
    ],
    related: [
      { label: 'Express Entry', href: '/services/express-entry' },
      { label: 'Permanent Residence', href: '/services/permanent-residence' },
      { label: 'Bridging Open Work Permit', href: '/services/bridging-open-work-permit' },
    ],
  },

  'spousal-sponsorship': {
    meta: {
      updated,
      title: 'Spousal Sponsorship Canada: Inland and Family Class PR',
      description: 'Spousal sponsorship Canada guide covering sponsor eligibility, spouses and partners, inland and Family Class options, relationship evidence, documents and open work permits.',
      keywords: ['spousal sponsorship Canada', 'sponsor spouse Canada', 'inland spousal sponsorship', 'common-law sponsorship', 'spouse permanent residence'],
    },
    prose: [
      {
        heading: 'Spousal sponsorship permanent residence',
        paragraphs: [
          'Eligible Canadian citizens and permanent residents may sponsor a spouse, common-law partner or, in limited circumstances, a conjugal partner for permanent residence. Both the sponsor and the person being sponsored must meet IRCC’s requirements.',
          'The application must establish the qualifying relationship, its genuineness and the completeness of the sponsorship and permanent residence package.',
        ],
      },
      {
        heading: 'Who can sponsor and who can be sponsored',
        paragraphs: [
          'A sponsor must generally be at least 18, be a Canadian citizen or permanent resident, sign the required undertaking and not be barred from sponsoring. A Canadian citizen living abroad may need to show plans to return to Canada; a permanent resident generally must reside in Canada.',
          'The sponsored person may be a legally married spouse, a partner who meets the common-law definition or a conjugal partner who fits the narrower program criteria.',
        ],
      },
      {
        heading: 'In-Canada and Family Class applications',
        paragraphs: [
          'An in-Canada application may suit an eligible spouse or partner living with the sponsor in Canada. A Family Class application may be used for a person outside Canada and can also fit some applicants in Canada depending on their circumstances.',
          'Travel plans, temporary status, possible appeal rights and processing circumstances should be considered before choosing the route.',
        ],
        links: [{ label: 'Spousal Open Work Permit', href: '/services/spouse-open-work-permit' }],
      },
      {
        heading: 'Proving a genuine relationship',
        paragraphs: [
          'IRCC assesses the relationship as a whole. Useful evidence can include photographs, communication history, travel together, joint residence, shared finances, insurance, family involvement and evidence of ongoing commitment.',
          'The evidence should reflect the couple’s real history rather than a generic checklist. Dates and explanations must remain consistent across forms and supporting records.',
        ],
      },
      {
        heading: 'Sponsorship undertaking and financial responsibility',
        paragraphs: [
          'The sponsor signs a legally binding undertaking to provide basic support for the prescribed period. Separation, divorce or a change in the relationship does not automatically end that undertaking.',
          'Most spousal sponsorship cases do not have a fixed minimum-income threshold, but the sponsor must meet the eligibility rules and cannot generally be receiving social assistance for a reason other than disability.',
        ],
      },
      {
        heading: 'Open work permits for sponsored partners in Canada',
        paragraphs: [
          'A sponsored spouse, common-law partner or conjugal partner living in Canada may qualify for an open work permit. The principal applicant generally needs an acknowledgement of receipt, although a narrow option may apply without an AOR when temporary status will expire within two weeks and the PR application has already been submitted.',
          'Applicants without valid status under the spousal public policy generally need approval in principle before applying for the open work permit.',
        ],
      },
    ],
    cards: [
      { title: 'Sponsor requirements', icon: 'check', items: ['Canadian citizen or permanent resident.', 'At least 18 years old.', 'Not subject to a sponsorship bar.', 'Able to sign and respect the undertaking.'] },
      { title: 'Qualifying relationships', icon: 'rings', items: ['Legally married spouse.', 'Common-law partner meeting the cohabitation definition.', 'Conjugal partner in limited qualifying circumstances.', 'A relationship that is genuine and not entered into primarily for status.'] },
      { title: 'Relationship evidence', icon: 'family', items: ['Shared residence and finances.', 'Communication and travel history.', 'Photographs and family involvement.', 'Children’s records and other joint responsibilities, where applicable.'] },
      { title: 'Common refusal concerns', icon: 'eye', items: ['Insufficient evidence of genuineness.', 'Inconsistent relationship timelines.', 'Sponsor ineligibility.', 'Missing civil, medical, police or background documents.'] },
    ],
    documents: {
      heading: 'Spousal sponsorship document checklist',
      description: 'The checklist depends on relationship type, residence history and family composition.',
      items: ['Passports and identity documents.', 'Marriage certificate or common-law evidence.', 'Sponsor’s citizenship or permanent residence proof.', 'Forms for sponsorship and permanent residence.', 'Relationship history and supporting evidence.', 'Photographs, communication and travel records.', 'Police certificates and medical examination confirmation.', 'Birth, divorce, custody or death records, where applicable.', 'Financial and employment records where relevant.', 'Certified translations and country-specific documents.'],
    },
    process: [
      { title: 'Choose the route', description: 'Compare in-Canada and Family Class processing.' },
      { title: 'Confirm eligibility', description: 'Review both the sponsor and applicant requirements.' },
      { title: 'Build relationship evidence', description: 'Organize the history and genuine-relationship proof.' },
      { title: 'Prepare both applications', description: 'Complete sponsorship and PR forms consistently.' },
      { title: 'Submit and respond', description: 'Track AOR, biometrics, medicals and IRCC requests.' },
      { title: 'Complete landing', description: 'Follow final instructions to obtain permanent residence.' },
    ],
    why: [
      { letter: 'A', title: 'Route selection', body: 'Choose the process that fits residence, travel and status.' },
      { letter: 'B', title: 'Evidence strategy', body: 'Tell the relationship story with relevant records.' },
      { letter: 'C', title: 'Consistency review', body: 'Align forms, dates and prior immigration history.' },
      { letter: 'D', title: 'Work permit planning', body: 'Assess whether an in-Canada open work permit is available.' },
    ],
    faqs: [
      { question: 'Who can sponsor a spouse or partner?', answer: 'An eligible Canadian citizen or permanent resident who is at least 18 and meets the sponsorship requirements may apply.' },
      { question: 'Can I sponsor my common-law partner?', answer: 'Yes, if the relationship meets IRCC’s common-law definition and both parties meet the other requirements.' },
      { question: 'What is the difference between in-Canada and Family Class sponsorship?', answer: 'The routes differ in residence circumstances, procedure and strategic considerations. The right option depends on where the applicant lives, status, travel plans and other case factors.' },
      { question: 'Is there a minimum income requirement?', answer: 'Most spouse and partner sponsorships do not use a fixed minimum-income threshold, but sponsor eligibility and the undertaking still apply.' },
      { question: 'Can my spouse work while the application is processed?', answer: 'A sponsored spouse or partner living in Canada may qualify for an open work permit if the current requirements are met.' },
      { question: 'How do we prove our relationship is genuine?', answer: 'Use a balanced record of your shared history, communication, visits, residence, finances, family involvement and ongoing plans.' },
      { question: 'Can a sponsorship application be refused?', answer: 'Yes. Refusals can involve sponsor eligibility, relationship genuineness, missing evidence, inadmissibility or inconsistent information.' },
      { question: 'Can a refusal be appealed?', answer: 'Some Family Class sponsorship refusals may carry appeal rights, while other applications may require a different remedy. Obtain case-specific advice quickly because deadlines can apply.' },
    ],
    related: [
      { label: 'Spousal Open Work Permit', href: '/services/spouse-open-work-permit' },
      { label: 'Family Sponsorship', href: '/services/family-sponsorship' },
      { label: 'Permanent Residence', href: '/services/permanent-residence' },
    ],
  },

  'lmia-work-permit': {
    meta: {
      updated,
      title: 'LMIA-Based Closed Work Permit Canada',
      description: 'Complete employer-specific work permit guide covering positive LMIAs, job offers, employer and worker documents, permit conditions, changing employers and extensions.',
      keywords: ['closed work permit Canada', 'LMIA work permit', 'employer-specific work permit', 'positive LMIA', 'Canada work permit'],
    },
    prose: [
      { heading: 'LMIA-based employer-specific work permits', paragraphs: ['An employer-specific or closed work permit authorizes work under the employer, occupation, location and other conditions printed on the permit. Many jobs require the employer to obtain a positive Labour Market Impact Assessment before the worker applies.', 'The LMIA and work permit are separate decisions. A positive LMIA supports the job offer but does not guarantee that IRCC will approve the worker’s application.'] },
      { heading: 'What a positive LMIA establishes', paragraphs: ['Employment and Social Development Canada uses the LMIA process to assess whether there is a need for a temporary foreign worker and whether Canadians or permanent residents are available for the job.', 'The employer must follow the applicable recruitment, wage, business-legitimacy and program requirements. The worker then uses the LMIA documents, contract and job offer in the work permit application.'] },
      { heading: 'Work permit conditions', paragraphs: ['The issued permit identifies the authorized employer and may specify occupation, work location and validity period. The worker must comply with every condition.', 'Changing employers generally requires new authorization before work begins. Depending on the new job, the employer may need a new LMIA or another basis for an employer-specific permit.'], links: [{ label: 'Compare other work permits', href: '/services/work-permit' }, { label: 'LMIA employer services', href: '/services/lmia-services' }] },
      { heading: 'Employer and worker responsibilities', paragraphs: ['The employer provides the positive LMIA and related employment documents. The worker must establish identity, qualifications, admissibility and eligibility to use the application route selected.', 'The job title, duties, wage, location and duration should match across the LMIA, offer letter, contract, forms and supporting explanations.'] },
      { heading: 'Extending or changing the permit', paragraphs: ['An extension may require a new or still-valid LMIA and updated employment documents. File before the current permit expires where maintained-status protection is needed.', 'Do not assume that an extension application authorizes work for a new employer. The existing permit conditions remain important until new authorization is issued.'] },
    ],
    cards: [
      { title: 'Employer-side requirements', icon: 'building', items: ['Eligible and compliant employer.', 'Positive LMIA where required.', 'Job offer and signed employment contract.', 'Wage, duties and location consistent with the LMIA.'] },
      { title: 'Worker-side requirements', icon: 'passport', items: ['Valid passport and application route.', 'Education, experience and licensing for the role.', 'Admissibility and medical examination where required.', 'Complete forms and truthful immigration history.'] },
      { title: 'Permit restrictions', icon: 'shield', items: ['Named employer.', 'Authorized occupation.', 'Work location where specified.', 'Expiry date and any medical or other conditions.'] },
      { title: 'Common refusal concerns', icon: 'eye', items: ['LMIA or job details do not match.', 'Worker does not establish job qualifications.', 'Missing employment or status documents.', 'Inconsistent information or admissibility concerns.'] },
    ],
    documents: { heading: 'Closed work permit document checklist', description: 'The employer and worker documents must support the same position.', items: ['Passport and immigration-status documents.', 'Positive LMIA and LMIA file number.', 'Job offer letter and employment contract.', 'Resume and detailed past-employer references.', 'Education, trade, licensing or certification records.', 'Proof of experience and ability to perform the work.', 'Family, medical and police documents where required.', 'Quebec CAQ for applicable paid work in Quebec.', 'Application forms and digital photograph.', 'Explanations for refusals, status issues or inconsistencies.'] },
    process: [
      { title: 'Confirm the permit route', description: 'Determine whether the job needs an LMIA.' },
      { title: 'Complete the employer stage', description: 'Obtain the positive LMIA and finalize the offer.' },
      { title: 'Check worker qualifications', description: 'Match experience, education and licensing to the job.' },
      { title: 'Prepare the application', description: 'Align the LMIA, contract, forms and supporting records.' },
      { title: 'Submit and respond', description: 'Complete biometrics, medicals or document requests.' },
      { title: 'Follow permit conditions', description: 'Work only as authorized after approval.' },
    ],
    why: [
      { letter: 'A', title: 'Two-sided review', body: 'Check employer and worker evidence together.' },
      { letter: 'B', title: 'Job consistency', body: 'Align duties, wage, location and duration across documents.' },
      { letter: 'C', title: 'Qualification proof', body: 'Demonstrate that the worker can perform the approved role.' },
      { letter: 'D', title: 'Status planning', body: 'Prepare extensions or employer changes before authorization ends.' },
    ],
    faqs: [
      { question: 'What is a closed work permit?', answer: 'It is an employer-specific work permit that authorizes work under the employer and conditions listed on the document.' },
      { question: 'Do I need an LMIA?', answer: 'Most employer-specific jobs require one, but some work permits are LMIA-exempt. The correct category must be confirmed before applying.' },
      { question: 'Does a positive LMIA guarantee a work permit?', answer: 'No. IRCC separately assesses the worker’s eligibility, qualifications, admissibility and documents.' },
      { question: 'Can I change employers?', answer: 'You generally need new authorization before working for another employer. The new employer may need an LMIA or an LMIA-exempt offer.' },
      { question: 'How long is the permit valid?', answer: 'IRCC determines validity using the approved employment, passport validity and other applicable factors.' },
      { question: 'Can the permit be extended?', answer: 'Possibly, if the employer and worker continue to meet the requirements. A new or valid LMIA may be required.' },
      { question: 'Can my spouse apply for an open work permit?', answer: 'Eligibility depends on the principal worker’s occupation, permit validity and the family open-work-permit rules in effect when the spouse applies.' },
    ],
    related: [{ label: 'LMIA Services', href: '/services/lmia-services' }, { label: 'Work Permit Overview', href: '/services/work-permit' }, { label: 'Spousal Open Work Permit', href: '/services/spouse-open-work-permit' }],
  },

  pgwp: {
    meta: {
      updated,
      title: 'Post-Graduation Work Permit Canada: PGWP Eligibility',
      description: 'Current PGWP Canada guide covering eligible DLIs and programs, language and field-of-study rules, the 180-day deadline, documents and working while waiting.',
      keywords: ['PGWP Canada', 'post-graduation work permit', 'PGWP eligibility', 'PGWP language requirement', 'PGWP field of study'],
    },
    prose: [
      { heading: 'Post-Graduation Work Permit overview', paragraphs: ['A Post-Graduation Work Permit is an open work permit for eligible graduates of qualifying Canadian programs. It can allow work for most employers and provide Canadian experience that may support a later immigration application.', 'A PGWP is generally available only once. Confirm the institution, program, study history and current rules before relying on it as part of a long-term plan.'] },
      { heading: 'Institution, program and study-history eligibility', paragraphs: ['The program must be PGWP-eligible and generally at least eight months long, or 900 hours for certain Quebec credentials. Attending a DLI does not automatically make every program eligible.', 'Full-time status, authorized leave, part-time final semesters, online study and transfers can affect eligibility. Review the complete study history rather than only the final credential.'] },
      { heading: 'Language and field-of-study requirements', paragraphs: ['Most applicants who file on or after November 1, 2024 must provide approved English or French results. Degree graduates generally need CLB or NCLC 7 in all four abilities. Many college and other non-university graduates generally need CLB or NCLC 5.', 'Bachelor’s, master’s and doctoral graduates do not have a field-of-study requirement. Other graduates may need an eligible CIP code depending on when the study permit application was submitted. IRCC has frozen the eligible field list for 2026.'] },
      { heading: 'Application deadline and status', paragraphs: ['Applicants generally have 180 days after the school confirms program completion to apply. The study permit must have been valid at some point during that period, subject to the detailed inside- and outside-Canada rules.', 'Passport expiry may shorten the permit. If status expires or the applicant travels, the filing and work-authority strategy should be reviewed before action is taken.'] },
      { heading: 'Working while the PGWP is processed', paragraphs: ['Some graduates who apply from inside Canada may work full-time while waiting if they met all relevant conditions, including holding a valid study permit when they applied and being eligible to work off campus during their studies.', 'An application receipt alone is not enough. Confirm every condition and keep evidence of the timely application.'], links: [{ label: 'Express Entry after graduation', href: '/services/express-entry' }, { label: 'Study Permit', href: '/services/study-permit' }] },
    ],
    cards: [
      { title: 'Core eligibility review', icon: 'check', items: ['PGWP-eligible DLI and program.', 'Program length and credential requirements.', 'Full-time study history and authorized exceptions.', 'Application within the permitted timeframe.'] },
      { title: 'Newer application requirements', icon: 'file', items: ['Approved English or French test.', 'Required CLB or NCLC level.', 'Eligible field of study where applicable.', 'Evidence of the program’s CIP code where required.'] },
      { title: 'Permit length factors', icon: 'clock', items: ['Credential and eligible program length.', 'Special treatment for qualifying master’s programs.', 'Passport expiry date.', 'Previous PGWP issuance.'] },
      { title: 'Common refusal concerns', icon: 'eye', items: ['Ineligible program or institution.', 'Late filing or status gaps.', 'Missing language or CIP evidence.', 'Unresolved leave, part-time or distance-study periods.'] },
    ],
    documents: { heading: 'PGWP document checklist', description: 'The checklist depends on program type, study-permit date and filing location.', items: ['Passport and current immigration documents.', 'Official completion letter.', 'Official transcript or accepted transcript record.', 'Approved language test results, where required.', 'Proof of eligible field of study, where required.', 'Study permit and prior status records.', 'Evidence for authorized leave, transfers or part-time study.', 'Explanation of distance learning or time outside Canada.', 'Restoration documents, where applicable.', 'Supporting evidence requested by IRCC.'] },
    process: [
      { title: 'Confirm program eligibility', description: 'Check the DLI, program and credential.' },
      { title: 'Review study history', description: 'Assess full-time status, leave, transfers and online study.' },
      { title: 'Check language and CIP', description: 'Identify the current requirements for your credential.' },
      { title: 'Calculate the deadline', description: 'Use the official completion-confirmation date.' },
      { title: 'Prepare and submit', description: 'File the completion, transcript and supporting evidence.' },
      { title: 'Confirm work authority', description: 'Work only if every waiting-period condition is met.' },
    ],
    why: [
      { letter: 'A', title: 'Eligibility audit', body: 'Review more than the school name and credential.' },
      { letter: 'B', title: 'Deadline control', body: 'Calculate the 180-day period and status implications.' },
      { letter: 'C', title: 'New-rule review', body: 'Confirm language and field-of-study evidence.' },
      { letter: 'D', title: 'Future planning', body: 'Connect authorized work to realistic PR options.' },
    ],
    faqs: [
      { question: 'How long do I have to apply for a PGWP?', answer: 'Generally 180 days after your school confirms that you completed the program. Status and document requirements also apply.' },
      { question: 'Is every DLI program PGWP-eligible?', answer: 'No. A school can be a DLI while some of its programs are not eligible for a PGWP.' },
      { question: 'Do I need a language test?', answer: 'Most applications filed on or after November 1, 2024 require approved English or French results. The level depends on the credential and institution type.' },
      { question: 'Does my program need an eligible field of study?', answer: 'It may, depending on the credential and the date of the study permit application. Bachelor’s, master’s and doctoral graduates are exempt from the field requirement.' },
      { question: 'How long can a PGWP be valid?', answer: 'The period depends on the credential, eligible program length, special master’s rules and passport validity, up to the program maximum.' },
      { question: 'Can I work while waiting?', answer: 'Some in-Canada graduates can work full-time if they met all of IRCC’s conditions when they submitted the PGWP application.' },
      { question: 'Can I get a second PGWP?', answer: 'A PGWP is generally available only once.' },
      { question: 'Does a PGWP guarantee permanent residence?', answer: 'No. Any PR application is assessed separately under its own requirements.' },
    ],
    related: [{ label: 'Study Permit', href: '/services/study-permit' }, { label: 'Express Entry', href: '/services/express-entry' }, { label: 'Provincial Nominee Program', href: '/services/provincial-nominee-program' }],
  },

  'spouse-open-work-permit': {
    meta: {
      updated,
      title: 'Spousal Open Work Permit Canada: Current Eligibility',
      description: 'Current SOWP Canada guide for spouses of eligible students, workers and PR applicants, including relationship proof, principal applicant requirements and documents.',
      keywords: ['spousal open work permit Canada', 'SOWP eligibility', 'spouse work permit student Canada', 'spouse work permit foreign worker'],
    },
    prose: [
      { heading: 'Spousal open work permits in Canada', paragraphs: ['A spousal open work permit may let an eligible spouse or common-law partner work for most employers without an LMIA or a specific job offer. Eligibility comes from a defined immigration category; marriage or partnership alone is not enough.', 'The rules differ for family members of international students, foreign workers and permanent residence applicants. The correct category and current principal-applicant requirements must be identified first.'] },
      { heading: 'Spouses of international students', paragraphs: ['Since January 21, 2025, eligibility is limited to spouses or common-law partners of students in specified programs. These include doctoral programs, qualifying master’s programs of at least 16 months and certain listed professional degree programs.', 'The principal student generally needs a valid study permit and proof of current enrolment in an eligible program. A PGWP application that has not received a positive decision does not by itself support this student-spouse category.'] },
      { heading: 'Spouses of foreign workers', paragraphs: ['Eligibility depends on the principal worker’s permit or work authorization, its remaining validity, and the occupation or other qualifying category. Current rules generally focus on workers in TEER 0 or 1 and selected TEER 2 or 3 occupations, with specific exceptions and special measures.', 'For many applications, the principal worker’s authorization must remain valid for at least 16 months when IRCC receives the spouse’s application. Always confirm the current occupation list and exceptions.'] },
      { heading: 'Spouses of permanent residence applicants', paragraphs: ['Separate open-work-permit options may be available to family members of applicants in qualifying permanent residence streams, including sponsored spouses in Canada.', 'The required AOR, residence, status and relationship evidence depend on the PR category. Do not combine requirements from unrelated open-work-permit programs.'], links: [{ label: 'Spousal Sponsorship', href: '/services/spousal-sponsorship' }, { label: 'Bridging Open Work Permit', href: '/services/bridging-open-work-permit' }] },
      { heading: 'Open permit conditions and validity', paragraphs: ['An approved open permit generally permits work for most employers, but restrictions can apply to particular employers or occupations, especially when medical requirements have not been met.', 'The validity period may be limited by the principal applicant’s authorization, the spouse’s passport or program-specific rules.'] },
    ],
    cards: [
      { title: 'Relationship evidence', icon: 'rings', items: ['Marriage certificate or common-law proof.', 'Evidence the relationship is genuine.', 'Shared residence, finances or ongoing contact.', 'Accurate family and immigration history.'] },
      { title: 'Principal applicant evidence', icon: 'file', items: ['Study or work permit.', 'Enrolment or employment confirmation.', 'Program, occupation and TEER details.', 'Remaining permit validity and current status.'] },
      { title: 'What an open permit allows', icon: 'briefcase', items: ['No LMIA for the spouse’s job.', 'No employer offer needed before applying.', 'Work for most employers.', 'Change employers subject to permit conditions.'] },
      { title: 'Common refusal concerns', icon: 'eye', items: ['Principal applicant does not fit a qualifying category.', 'Insufficient permit validity.', 'Weak relationship evidence.', 'Missing proof of enrolment, occupation or status.'] },
    ],
    documents: { heading: 'Spousal open work permit checklist', description: 'Documents vary according to the principal applicant’s category.', items: ['Applicant passport and status documents.', 'Marriage certificate or common-law evidence.', 'Principal applicant’s study or work permit.', 'Enrolment letter, transcript or program details for student cases.', 'Employment letter, job duties, NOC and pay records for worker cases.', 'PR acknowledgement or sponsorship evidence where applicable.', 'Photographs and digital application forms.', 'Medical examination evidence where needed for intended work.', 'Explanations for status, refusal or relationship-history issues.'] },
    process: [
      { title: 'Identify the category', description: 'Student, worker or permanent-residence family member.' },
      { title: 'Verify the principal applicant', description: 'Check program, occupation, status and permit validity.' },
      { title: 'Document the relationship', description: 'Prepare marriage or common-law and genuineness evidence.' },
      { title: 'Confirm the application route', description: 'Determine inside- or outside-Canada requirements.' },
      { title: 'Submit the application', description: 'Upload the category-specific evidence and forms.' },
      { title: 'Review permit conditions', description: 'Work only after approval and within the printed conditions.' },
    ],
    why: [
      { letter: 'A', title: 'Current-rule check', body: 'Apply the category rules in effect on the filing date.' },
      { letter: 'B', title: 'Principal-file review', body: 'Prove the student, worker or PR basis for eligibility.' },
      { letter: 'C', title: 'Relationship proof', body: 'Organize clear and proportionate evidence.' },
      { letter: 'D', title: 'Family planning', body: 'Coordinate work, study and immigration expiry dates.' },
    ],
    faqs: [
      { question: 'Does every spouse of a student qualify?', answer: 'No. Current rules limit eligibility to spouses of students in specified graduate and professional programs.' },
      { question: 'Does every spouse of a foreign worker qualify?', answer: 'No. Eligibility depends on the principal worker’s occupation, authorization, remaining validity and any applicable exception.' },
      { question: 'Do I need a job offer?', answer: 'Generally no. An open work permit is not tied to a specific job offer.' },
      { question: 'Can I work for any employer?', answer: 'Usually most employers, subject to the restrictions printed on the permit and rules for certain occupations.' },
      { question: 'How long will the permit be valid?', answer: 'Validity may be limited by the principal applicant’s status, program rules, the applicant’s passport or other factors.' },
      { question: 'Can I apply from inside Canada?', answer: 'Possibly, if the in-Canada application and status requirements are met.' },
      { question: 'Can I extend a spousal open work permit?', answer: 'Some applicants can extend if they continue to meet the current category requirements. Apply before expiry.' },
      { question: 'Does the permit lead directly to PR?', answer: 'No. Permanent residence requires a separate qualifying application.' },
    ],
    related: [{ label: 'Spousal Sponsorship', href: '/services/spousal-sponsorship' }, { label: 'Study Permit', href: '/services/study-permit' }, { label: 'Work Permit Overview', href: '/services/work-permit' }],
  },

  'bridging-open-work-permit': {
    meta: {
      updated,
      title: 'Bridging Open Work Permit Canada: BOWP Eligibility',
      description: 'BOWP Canada guide covering qualifying PR applications, acknowledgement of receipt, status, work authorization, documents and spouse considerations.',
      keywords: ['bridging open work permit', 'BOWP Canada', 'work permit while PR processing', 'Express Entry BOWP'],
    },
    prose: [
      { heading: 'Bridging open work permit overview', paragraphs: ['A Bridging Open Work Permit can let eligible principal applicants keep working in Canada while IRCC processes a qualifying permanent residence application.', 'Creating an Express Entry profile is not a permanent residence application. The PR file generally must be complete, have passed the completeness check and have an acknowledgement of receipt before the BOWP stage is available.'] },
      { heading: 'Qualifying permanent residence applications', paragraphs: ['BOWPs are available for applicants in specified programs, including Express Entry, certain provincial nominee cases, the Quebec skilled worker class and some other listed economic or caregiver categories.', 'Requirements vary by PR program. Provincial nominees may face employment or provincial restrictions, and Quebec applicants follow separate instructions.'], links: [{ label: 'Express Entry', href: '/services/express-entry' }, { label: 'Provincial Nominee Program', href: '/services/provincial-nominee-program' }] },
      { heading: 'Status and location requirements', paragraphs: ['For Express Entry cases, the principal applicant must generally live in Canada and intend to live outside Quebec when applying. They must have a valid work permit and status, maintained worker status, or be eligible to restore status and obtain a work permit.', 'Travel after the existing permit expires can interrupt the ability to work until the new permit is approved. Status and travel planning should be reviewed before departure.'] },
      { heading: 'Working while the BOWP is processed', paragraphs: ['Submitting a BOWP application does not create work authorization by itself. Continued work may flow from maintained status when a complete application is filed before the existing permit expires and the applicant meets the applicable conditions.', 'Applicants who have already lost status need a separate restoration analysis and generally cannot rely on maintained worker status.'] },
      { heading: 'Spouse or partner work permits', paragraphs: ['A spouse or common-law partner may have a separate open-work-permit option depending on the principal applicant’s BOWP, PR program, occupation and current family-member rules.', 'The spouse must submit their own application and establish independent eligibility.'] },
    ],
    cards: [
      { title: 'Core BOWP requirements', icon: 'check', items: ['Principal applicant in a qualifying PR program.', 'Complete PR application past the completeness check.', 'Acknowledgement of receipt.', 'Eligible status and location at the time of application.'] },
      { title: 'What does not qualify by itself', icon: 'eye', items: ['An Express Entry profile in the pool.', 'A notification of interest from a province.', 'A PR plan that has not been submitted.', 'A spouse’s PR application when you are not the principal applicant.'] },
      { title: 'Status planning', icon: 'clock', items: ['Apply before the current permit expires where possible.', 'Confirm maintained-status work conditions.', 'Review restoration if status has already expired.', 'Assess travel before leaving Canada.'] },
      { title: 'Permit conditions', icon: 'shield', items: ['Open work authorization in eligible cases.', 'Possible provincial restrictions for nominees.', 'Expiry based on IRCC assessment and passport validity.', 'No guarantee of approval of the underlying PR application.'] },
    ],
    documents: { heading: 'BOWP document checklist', description: 'Use the current checklist for the permanent-residence category and work permit route.', items: ['Passport and current work permit.', 'Acknowledgement of receipt letter.', 'Proof the PR application passed the completeness check.', 'Provincial nomination records, where applicable.', 'Current Canadian address and status evidence.', 'Digital photograph and application forms.', 'Restoration documents, where applicable.', 'Marriage or common-law documents for related family applications.', 'Program-specific supporting evidence requested by IRCC.'] },
    process: [
      { title: 'Confirm the PR program', description: 'Verify that the submitted application supports a BOWP.' },
      { title: 'Check AOR and completeness', description: 'Make sure the PR application is past the required stage.' },
      { title: 'Review status and location', description: 'Confirm permit validity, maintained status or restoration.' },
      { title: 'Prepare the work permit file', description: 'Upload the AOR and program-specific evidence.' },
      { title: 'Submit before expiry', description: 'Preserve status where the maintained-status rules apply.' },
      { title: 'Track both applications', description: 'Continue meeting work-permit and PR requirements.' },
    ],
    why: [
      { letter: 'A', title: 'PR-stage review', body: 'Distinguish a pool profile from a submitted PR application.' },
      { letter: 'B', title: 'Status protection', body: 'Coordinate the BOWP with the current permit expiry.' },
      { letter: 'C', title: 'Program details', body: 'Apply the correct Express Entry, PNP or Quebec instructions.' },
      { letter: 'D', title: 'Family options', body: 'Assess separate eligibility for a spouse or partner.' },
    ],
    faqs: [
      { question: 'What is a BOWP?', answer: 'It is an open work permit for eligible principal applicants with a qualifying permanent residence application in process.' },
      { question: 'Is an Express Entry profile enough?', answer: 'No. You generally need a complete permanent residence application and an acknowledgement of receipt.' },
      { question: 'Do I need a job offer?', answer: 'A BOWP is generally open and does not require a specific offer, although program or provincial conditions may apply.' },
      { question: 'Can I change employers?', answer: 'An approved open permit usually allows work for most employers, subject to its printed restrictions.' },
      { question: 'Can I apply after my work permit expires?', answer: 'Some people may apply with restoration, but they do not have the same maintained-status work rights. Obtain a status review promptly.' },
      { question: 'Can I travel while the BOWP is processing?', answer: 'You may leave, but travel can affect re-entry and the ability to work if the old permit expires. A work permit is not a travel document.' },
      { question: 'Can my spouse also get an open work permit?', answer: 'Possibly, but the spouse must meet the family open-work-permit rules and submit a separate application.' },
      { question: 'Does a BOWP guarantee PR approval?', answer: 'No. The permanent residence application remains a separate decision.' },
    ],
    related: [{ label: 'Express Entry', href: '/services/express-entry' }, { label: 'Provincial Nominee Program', href: '/services/provincial-nominee-program' }, { label: 'Work Permit Overview', href: '/services/work-permit' }],
  },

  'international-experience-canada': {
    meta: {
      updated,
      title: 'International Experience Canada: IEC Work Permits',
      description: 'IEC Canada guide covering Working Holiday, Young Professionals and International Co-op eligibility, pools, invitations, employer steps, documents and arrival.',
      keywords: ['International Experience Canada', 'IEC Canada', 'Working Holiday Canada', 'Young Professionals Canada', 'International Co-op Canada'],
    },
    prose: [
      { heading: 'International Experience Canada overview', paragraphs: ['International Experience Canada gives eligible youth from partner countries and territories the opportunity to work and travel in Canada, in some cases for up to two years.', 'Citizenship, age, residence, category availability, participation history and maximum duration depend on the applicable youth mobility agreement. A recognized organization may support some applicants.'] },
      { heading: 'Working Holiday', paragraphs: ['Working Holiday is for eligible participants who want flexibility to work for more than one employer or in more than one location. It leads to an open work permit and generally does not require a job offer before applying.', 'An open permit does not arrange employment or accommodation. Applicants should plan funds, insurance, housing and job searching before travel.'] },
      { heading: 'Young Professionals', paragraphs: ['Young Professionals requires a paid Canadian job offer that contributes to professional development. The permit is employer-specific, and the applicant normally works for the same employer in the same location.', 'The job is generally in TEER 0, 1, 2 or 3. A TEER 4 job may qualify when it is in the applicant’s field of study and supported by a post-secondary credential.'] },
      { heading: 'International Co-op Internship', paragraphs: ['International Co-op is for eligible students registered at a post-secondary institution outside Canada who need a Canadian placement to complete their studies.', 'The placement must be directly related to the field of study and produces an employer-specific work permit. Provincial or territorial labour law determines whether the internship must be paid.'] },
      { heading: 'Pools, invitations and deadlines', paragraphs: ['Applicants create a profile for the eligible country-and-category pool. Entering a pool is not a work permit application and does not guarantee an invitation.', 'After an invitation, there are strict deadlines to accept and complete the work permit application. For Young Professionals and Co-op, the employer completes the Employer Portal submission and fee before the worker files.'] },
      { heading: 'Preparing to arrive in Canada', paragraphs: ['Approval normally results in a port-of-entry letter of introduction rather than the physical permit. The border officer makes the final permit decision and checks travel documents, insurance, funds and other requirements.', 'The issued permit may be shorter than the program maximum if the passport, insurance or other evidence expires earlier.'], links: [{ label: 'Work Permit Overview', href: '/services/work-permit' }] },
    ],
    cards: [
      { title: 'Working Holiday', icon: 'plane', items: ['Open work permit.', 'No pre-arranged job offer in most cases.', 'Work for most employers.', 'Designed for flexible work and travel.'] },
      { title: 'Young Professionals', icon: 'briefcase', items: ['Paid professional-development job.', 'Employer-specific permit.', 'Eligible TEER occupation or qualifying TEER 4 role.', 'Employer Portal submission required.'] },
      { title: 'International Co-op', icon: 'graduation', items: ['Registered post-secondary student abroad.', 'Placement required to complete studies.', 'Direct connection to the field of study.', 'Employer-specific permit.'] },
      { title: 'Eligibility varies by citizenship', icon: 'passport', items: ['Age range.', 'Available categories.', 'Residence rules.', 'Participation limits and permit duration.'] },
    ],
    documents: { heading: 'IEC document checklist', description: 'Follow the personalized checklist in the IRCC account.', items: ['Passport with sufficient validity.', 'Digital photograph.', 'CV or résumé.', 'Family information form.', 'Police certificates, where required.', 'Medical examination evidence, where required.', 'Job offer and offer number for employer-specific categories.', 'Education or enrolment evidence for the relevant category.', 'Recognized organization confirmation, where applicable.', 'Proof of insurance and funds for arrival.'] },
    process: [
      { title: 'Check country eligibility', description: 'Review age, category and participation rules.' },
      { title: 'Create an IEC profile', description: 'Enter one or more eligible pools.' },
      { title: 'Wait for an invitation', description: 'Monitor the account and pool invitation information.' },
      { title: 'Complete employer steps', description: 'For Young Professionals or Co-op, submit the offer.' },
      { title: 'File the work permit', description: 'Meet the invitation and application deadlines.' },
      { title: 'Prepare for arrival', description: 'Bring the required insurance, funds and approval documents.' },
    ],
    why: [
      { letter: 'A', title: 'Country-rule review', body: 'Confirm age, categories, duration and repeat participation.' },
      { letter: 'B', title: 'Category matching', body: 'Choose flexibility, professional development or internship.' },
      { letter: 'C', title: 'Deadline control', body: 'Track invitation and filing windows carefully.' },
      { letter: 'D', title: 'Arrival readiness', body: 'Avoid shortened permits caused by expiring documents.' },
    ],
    faqs: [
      { question: 'Do I need a job offer?', answer: 'Working Holiday generally does not. Young Professionals and International Co-op require an eligible offer.' },
      { question: 'Does entering a pool guarantee an invitation?', answer: 'No. Invitations depend on category, country, quota and pool conditions.' },
      { question: 'Can I work while waiting in the pool?', answer: 'An IEC profile does not authorize work. You need separate valid work authorization.' },
      { question: 'Can I participate more than once?', answer: 'Possibly. Participation limits depend on citizenship, category and any recognized-organization arrangement.' },
      { question: 'Will I receive the maximum permit length?', answer: 'Not necessarily. Agreement rules, passport validity, insurance and the documents presented affect the issued period.' },
      { question: 'Can I change employers on Young Professionals?', answer: 'The permit is employer-specific. A change requires IRCC authorization under the applicable IEC rules.' },
      { question: 'Is health insurance required?', answer: 'IEC participants should arrive with insurance covering the full intended stay, including health care, hospitalization and repatriation. Insufficient coverage can shorten the permit.' },
      { question: 'Does IEC guarantee permanent residence?', answer: 'No. Permanent residence requires a separate qualifying application.' },
    ],
    related: [{ label: 'Work Permit Overview', href: '/services/work-permit' }, { label: 'Express Entry', href: '/services/express-entry' }, { label: 'Provincial Nominee Program', href: '/services/provincial-nominee-program' }],
  },

  'vulnerable-open-work-permit': {
    meta: {
      updated,
      title: 'Vulnerable Worker Open Work Permit Canada',
      description: 'Confidential guide to Canada’s open work permit for vulnerable workers facing abuse or risk of abuse, including eligibility, evidence, fees, family options and next steps.',
      keywords: ['vulnerable worker open work permit', 'VOWP Canada', 'workplace abuse foreign worker', 'open work permit abuse Canada'],
    },
    prose: [
      { heading: 'Open work permit for vulnerable workers', paragraphs: ['This temporary open work permit may help certain workers in Canada leave an abusive employment situation or a situation where there is a risk of abuse. It provides time to find another employer and pursue longer-term work authorization.', 'The process is confidential and each file is assessed on its own evidence. The permit is a temporary solution, has an expiry date and cannot be renewed.'] },
      { heading: 'Who may apply', paragraphs: ['The applicant must generally be in Canada and hold a valid employer-specific work permit, or a work permit issued under the Seasonal Agricultural Worker Program, and experience abuse or risk of abuse in relation to the job.', 'The application is made online and cannot be filed at a port of entry. There are no application fees for this work permit.'] },
      { heading: 'What abuse can include', paragraphs: ['Abuse is not limited to physical violence. It may include sexual, psychological, financial or verbal abuse, coercion, threats, unsafe conditions or other workplace exploitation.', 'Evidence is assessed in context. A worker may not have every type of record, so a clear personal statement and the available supporting information are important.'] },
      { heading: 'After approval', paragraphs: ['The open permit generally allows work for most employers, subject to any printed restrictions. IRCC may inspect the former employer but will not contact the employer for another reason as part of this process.', 'Family members who came to Canada with the worker may also be eligible for open work permits. They submit their own applications, which may be filed together.'], links: [{ label: 'Work Permit Overview', href: '/services/work-permit' }] },
      { heading: 'Safety and other support', paragraphs: ['Immigration status is only one part of a safety plan. Workers may also wish to contact emergency services, provincial employment standards, a worker-support organization, health professionals or legal services as appropriate.', 'If an employer monitors devices, use a safe device and protect browsing and communication records.'] },
    ],
    cards: [
      { title: 'Core eligibility', icon: 'shield', items: ['In Canada.', 'Eligible employer-specific or SAWP permit.', 'Abuse or risk of abuse related to employment.', 'Online application with available supporting evidence.'] },
      { title: 'Possible forms of abuse', icon: 'eye', items: ['Physical or sexual abuse.', 'Psychological or verbal abuse.', 'Financial abuse.', 'Threats, coercion or workplace exploitation.'] },
      { title: 'Evidence may include', icon: 'file', items: ['Personal statement.', 'Messages, emails or photographs.', 'Medical or police records.', 'Statements from support organizations or witnesses.'] },
      { title: 'Important permit limits', icon: 'clock', items: ['Temporary open work authorization.', 'No application fee.', 'Cannot be renewed.', 'A new work permit is needed before it expires.'] },
    ],
    documents: { heading: 'Vulnerable worker application documents', description: 'Submit truthful information and the evidence reasonably available to you.', items: ['Passport and current work permit.', 'Application to change conditions or remain as a worker.', 'Detailed personal statement.', 'Messages, emails, photographs or recordings where lawful and available.', 'Medical, police or workplace records, where available.', 'Statement from a support organization or professional.', 'Witness statements, where available.', 'Family-member applications and relationship documents, if applicable.', 'Any additional evidence requested by IRCC.'] },
    process: [
      { title: 'Prioritize safety', description: 'Use safe communications and seek immediate help if needed.' },
      { title: 'Confirm eligibility', description: 'Review location, permit type and workplace circumstances.' },
      { title: 'Prepare the statement', description: 'Explain the abuse or risk clearly and chronologically.' },
      { title: 'Collect available evidence', description: 'Include records that support the circumstances.' },
      { title: 'Apply online', description: 'Submit the no-fee application; it cannot be filed at the border.' },
      { title: 'Plan the next permit', description: 'Use the temporary period to find an employer and new authorization.' },
    ],
    why: [
      { letter: 'A', title: 'Confidential review', body: 'Discuss the situation respectfully and privately.' },
      { letter: 'B', title: 'Evidence organization', body: 'Present the available records without inventing gaps.' },
      { letter: 'C', title: 'Status planning', body: 'Coordinate immediate protection with the next permit.' },
      { letter: 'D', title: 'Family review', body: 'Assess separate options for accompanying family members.' },
    ],
    faqs: [
      { question: 'Who can apply for a vulnerable worker open permit?', answer: 'Certain workers in Canada with an eligible employer-specific or SAWP permit who are experiencing abuse or are at risk of abuse related to their job.' },
      { question: 'Is there an application fee?', answer: 'No. IRCC states that there are no fees for this work permit.' },
      { question: 'Can I apply at a port of entry?', answer: 'No. The application must be made online.' },
      { question: 'Do I need a police report?', answer: 'Not necessarily. Submit the evidence available to you, which can include a detailed statement and records from professionals, witnesses or communications.' },
      { question: 'Can I leave the abusive employer?', answer: 'The permit is designed to help eligible workers leave an abusive situation. Get case-specific advice about current authorization and safety before taking employment elsewhere.' },
      { question: 'Can the permit be renewed?', answer: 'No. It is temporary and cannot be renewed, so another work-permit option should be prepared before expiry.' },
      { question: 'Can my family members apply?', answer: 'Family members who came with you may be eligible for their own open work permits and must submit separate applications.' },
      { question: 'Does this permit grant permanent residence?', answer: 'No. Any permanent residence option requires a separate assessment.' },
    ],
    related: [{ label: 'Work Permit Overview', href: '/services/work-permit' }, { label: 'Closed Work Permit', href: '/services/lmia-work-permit' }],
  },

  'c10-work-permit': {
    meta: {
      updated,
      title: 'C10 Significant Benefit Work Permit Canada',
      description: 'C10 work permit guide covering significant economic, social or cultural benefit, employer requirements, evidence, application steps and permit conditions.',
      keywords: ['C10 work permit Canada', 'significant benefit work permit', 'LMIA exempt work permit C10', 'R205(a) work permit'],
    },
    prose: [
      { heading: 'C10 significant benefit work permit', paragraphs: ['C10 is an LMIA exemption used under paragraph 205(a) for work that creates or maintains significant social, cultural or economic benefits or opportunities for Canadians or permanent residents.', 'It is generally an employer-specific work permit. The exemption should not be used simply to avoid an LMIA; the evidence must explain why the proposed work meets the significant-benefit threshold and why another category does not better apply.'] },
      { heading: 'What significant benefit can mean', paragraphs: ['Economic benefit may involve credible job creation, industry development, innovation, export activity or another demonstrable contribution. Social benefit may concern health, safety, knowledge or community well-being. Cultural benefit may be shown through recognized achievement and contribution to arts, culture or heritage.', 'Officers weigh both positive evidence and possible negative effects, including labour-market displacement or wage suppression. Broad promotional claims are not enough.'] },
      { heading: 'Employer requirements', paragraphs: ['The employer normally submits the LMIA-exempt offer through the Employer Portal and pays the employer compliance fee before the worker applies, unless a specific exemption applies.', 'The offer number, employment agreement, occupation, duties, wages and location must be consistent with the worker’s application.'], links: [{ label: 'Employer-Specific Work Permits', href: '/services/lmia-work-permit' }, { label: 'LMIA Services', href: '/services/lmia-services' }] },
      { heading: 'Building the significant-benefit evidence', paragraphs: ['A focused submission identifies the proposed work, the benefit beyond the worker and employer, the people or sector affected, and the records supporting each claim.', 'Qualifications, achievements, expert recognition, project evidence, business records, contracts, impact projections and third-party support may be relevant depending on the case.'] },
      { heading: 'Permit validity, extensions and work conditions', paragraphs: ['There is no single validity period for every C10 permit. IRCC considers the proposed employment, supporting documents and passport validity.', 'The permit normally restricts work to the named employer and listed conditions. A change of employer or extension requires new authorization and a fresh eligibility assessment.'] },
    ],
    cards: [
      { title: 'Significant benefit types', icon: 'trophy', items: ['Economic contribution.', 'Social contribution.', 'Cultural contribution.', 'Benefit extending beyond the worker and employer.'] },
      { title: 'Employer-side evidence', icon: 'building', items: ['Employer Portal offer number.', 'Compliance fee receipt, where required.', 'Signed employment agreement.', 'Credible project or organizational records.'] },
      { title: 'Worker-side evidence', icon: 'passport', items: ['Experience and qualifications.', 'Awards, recognition or expert support.', 'Licensing where required.', 'Evidence connecting the worker to the proposed benefit.'] },
      { title: 'Application risks', icon: 'eye', items: ['Benefit claims are vague or unsupported.', 'A more specific exemption appears to apply.', 'Employer and worker documents conflict.', 'Labour-market risks are not addressed.'] },
    ],
    documents: { heading: 'C10 work permit document checklist', description: 'Evidence must be tailored to the proposed benefit and employment.', items: ['Passport, forms and status records.', 'Employer Portal offer number.', 'Signed employment agreement.', 'Detailed significant-benefit submission.', 'Resume, experience and qualification records.', 'Awards, publications, media or expert evidence, where relevant.', 'Employer, project or financial records.', 'Licensing or professional registration, where required.', 'Medical, police or family documents where applicable.', 'Evidence addressing possible negative effects.'] },
    process: [
      { title: 'Assess the exemption', description: 'Confirm that C10 is the correct LMIA-exempt category.' },
      { title: 'Define the benefit', description: 'Identify the economic, social or cultural contribution.' },
      { title: 'Collect objective evidence', description: 'Support the claims with relevant third-party records.' },
      { title: 'Complete employer steps', description: 'Submit the offer and compliance fee where required.' },
      { title: 'File the work permit', description: 'Align the employer offer and worker application.' },
      { title: 'Follow the conditions', description: 'Work only for the authorized employer and role.' },
    ],
    why: [
      { letter: 'A', title: 'Category assessment', body: 'Test C10 against other LMIA exemptions and the LMIA route.' },
      { letter: 'B', title: 'Benefit narrative', body: 'Explain who benefits, how and on what evidence.' },
      { letter: 'C', title: 'Employer alignment', body: 'Match the portal offer to the application record.' },
      { letter: 'D', title: 'Risk review', body: 'Address weak claims, alternatives and labour-market concerns.' },
    ],
    faqs: [
      { question: 'Is C10 an open work permit?', answer: 'Generally no. It normally supports an employer-specific permit.' },
      { question: 'Does C10 require an LMIA?', answer: 'No. C10 is an LMIA exemption, but the significant-benefit and general work-permit requirements must still be met.' },
      { question: 'What counts as significant benefit?', answer: 'The evidence may establish a substantial economic, social or cultural benefit or opportunity for Canadians or permanent residents.' },
      { question: 'Does the employer use the Employer Portal?', answer: 'Normally yes for an employer-specific LMIA-exempt offer, unless a specific portal or fee exemption applies.' },
      { question: 'Can I apply from inside Canada?', answer: 'Only if your circumstances allow an in-Canada work permit application. Physical presence alone is not enough.' },
      { question: 'Can I start working after applying?', answer: 'Not merely because an application was submitted. You need existing or new authorization that permits the work.' },
      { question: 'Can a C10 permit be extended?', answer: 'Possibly, but the extension requires a new assessment of continued eligibility, employer steps and the proposed benefit.' },
      { question: 'Does approval guarantee permanent residence?', answer: 'No. A C10 permit is temporary and PR requires a separate qualifying application.' },
    ],
    related: [{ label: 'Work Permit Overview', href: '/services/work-permit' }, { label: 'C11 Entrepreneur Work Permit', href: '/services/c11-work-permit' }, { label: 'LMIA-Based Work Permit', href: '/services/lmia-work-permit' }],
  },

  'c11-work-permit': {
    meta: {
      updated,
      title: 'C11 Entrepreneur Work Permit Canada',
      description: 'C11 entrepreneur and self-employed work permit guide covering business ownership, significant benefit, funds, business plans, employer compliance and temporary intent.',
      keywords: ['C11 work permit Canada', 'entrepreneur work permit Canada', 'self-employed work permit C11', 'business owner work permit'],
    },
    prose: [
      { heading: 'C11 entrepreneur and self-employed work permits', paragraphs: ['C11 is associated with LMIA-exempt work by certain entrepreneurs or self-employed people where the proposed activities create or maintain significant social, cultural or economic benefit or opportunity for Canadians or permanent residents.', 'Buying or incorporating a business does not establish eligibility by itself. The application must show the applicant’s real role, ability to execute the plan, temporary purpose and the benefit expected from the proposed work.'] },
      { heading: 'Ownership, control and the applicant’s role', paragraphs: ['The evidence should explain the applicant’s ownership and control, the decisions they will make and the work they will personally perform. It should distinguish those duties from the responsibilities of employees and service providers.', 'For a purchase, explain the existing operation and the changes proposed. For a new venture, show practical steps from formation and financing through launch and operations.'] },
      { heading: 'Business plan and significant benefit', paragraphs: ['A credible plan addresses the market, customers, competition, operations, staffing, licences, premises, milestones and financial assumptions. Claims about jobs, innovation, regional impact or cultural or social value need supporting evidence.', 'The plan should be proportionate to the business and consistent with contracts, ownership records, financial documents and the Employer Portal offer.'], links: [{ label: 'Business Immigration Overview', href: '/services/business-visa' }, { label: 'C10 Significant Benefit Permit', href: '/services/c10-work-permit' }] },
      { heading: 'Personal and business funds', paragraphs: ['Separate personal support funds from acquisition, start-up and operating capital. A clear financial presentation identifies the source and availability of money and avoids counting the same funds twice.', 'Useful categories can include purchase price, equipment, premises, payroll, professional services, working capital and family living costs.'] },
      { heading: 'Employer compliance and application route', paragraphs: ['Because the permit is employer-specific to the applicant’s business, the company generally completes the LMIA-exempt offer through the Employer Portal and pays the compliance fee unless an exemption applies.', 'The correct filing route depends on the applicant’s location and status. Being physically present in Canada does not automatically permit an in-Canada application.'] },
      { heading: 'Extensions and permanent residence planning', paragraphs: ['Keep records of business activity, expenditures, contracts, employees, revenue and actual outcomes. A later application should compare progress with the original plan and explain material changes.', 'C11 is temporary authorization and does not grant permanent residence. Business ownership or self-employed C11 work should not be assumed to qualify as Canadian Experience Class work experience.'] },
    ],
    cards: [
      { title: 'Applicant and ownership evidence', icon: 'building', items: ['Meaningful ownership and control.', 'Relevant management or industry experience.', 'Clearly defined day-to-day role.', 'Credible temporary purpose and departure plan.'] },
      { title: 'Business readiness', icon: 'target', items: ['Business plan and implementation schedule.', 'Ownership or acquisition records.', 'Market, customer and operational evidence.', 'Licences, premises and contracts where applicable.'] },
      { title: 'Financial presentation', icon: 'wallet', items: ['Separate personal and business funds.', 'Documented source and availability.', 'Realistic start-up and operating budget.', 'No double-counting of the same money.'] },
      { title: 'Common application risks', icon: 'eye', items: ['Business purchase presented as automatic eligibility.', 'Unsupported benefit or employment claims.', 'Applicant role is vague.', 'Figures and business descriptions conflict across documents.'] },
    ],
    documents: { heading: 'C11 work permit document checklist', description: 'The evidence should connect each important claim to a supporting record.', items: ['Passport, status documents and forms.', 'Corporate, shareholder or acquisition records.', 'Detailed business plan and implementation timeline.', 'Personal support and business-fund evidence.', 'Source-of-funds documentation.', 'Contracts, leases, licences and supplier or customer records.', 'Resume, qualifications and relevant experience.', 'Significant-benefit evidence.', 'Employer Portal offer number and fee receipt.', 'Family, medical and police records where applicable.'] },
    process: [
      { title: 'Assess the category', description: 'Compare C11 with other business and work permit options.' },
      { title: 'Define ownership and role', description: 'Document control and the work the applicant will perform.' },
      { title: 'Build the business plan', description: 'Support market, operations, staffing and benefit claims.' },
      { title: 'Reconcile the funds', description: 'Separate personal support from business capital.' },
      { title: 'Complete employer steps', description: 'Submit the LMIA-exempt offer where required.' },
      { title: 'File and document progress', description: 'Submit the work permit and retain operating records.' },
    ],
    why: [
      { letter: 'A', title: 'Option review', body: 'Avoid forcing a business plan into the wrong category.' },
      { letter: 'B', title: 'Evidence mapping', body: 'Tie ownership, funds and benefit claims to records.' },
      { letter: 'C', title: 'Business consistency', body: 'Align the plan, contracts, finances and employer offer.' },
      { letter: 'D', title: 'Future planning', body: 'Coordinate temporary work authorization with realistic next steps.' },
    ],
    faqs: [
      { question: 'Does buying a Canadian business guarantee a C11 permit?', answer: 'No. IRCC assesses ownership, the applicant’s role, temporary purpose, significant benefit and the complete evidence.' },
      { question: 'Is C11 an open work permit?', answer: 'No. It is generally employer-specific to the approved business and conditions.' },
      { question: 'Do I need an LMIA?', answer: 'C11 is an LMIA-exempt category, but the applicant and business must meet the exemption and general permit requirements.' },
      { question: 'Can I work for another employer?', answer: 'Normally not under the C11 permit. Other employment requires separate authorization.' },
      { question: 'Can I apply while in Canada?', answer: 'Only if your status and circumstances permit an in-Canada application.' },
      { question: 'Can I start operating after I submit the application?', answer: 'Submission alone does not authorize work. Wait until you have valid authorization covering the proposed activities.' },
      { question: 'Can the permit be extended?', answer: 'A later application must establish current eligibility, business progress, continuing benefit and the need for more time.' },
      { question: 'Does C11 lead directly to permanent residence?', answer: 'No. Any permanent residence option requires a separate assessment, and C11 self-employment should not be assumed to qualify for Canadian Experience Class.' },
    ],
    related: [{ label: 'Business Visa', href: '/services/business-visa' }, { label: 'C10 Significant Benefit Permit', href: '/services/c10-work-permit' }, { label: 'Work Permit Overview', href: '/services/work-permit' }],
  },
};

export default clientServiceEnhancements;
