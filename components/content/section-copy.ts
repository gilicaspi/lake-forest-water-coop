import { oneLine } from 'common-tags';

export interface SectionContent {
  title?: string;
  content: string | string[];
}

export const SECTION_COPY: Record<string, SectionContent> = {
  water_sys_info: {
    title: 'Water System Information',
    content: oneLine`If you would like to know more about the information
    contained in this report, please contact Ronald Slane at (608) 256-1513.`,
  },
  input_oppty: {
    title: 'Opportunity for input on decisions affecting your water quality',
    content: 'To comment on water quality contact Gary Davis at (608) 239-8039.',
  },
  health_info: {
    title: 'Health Information',
    content: [
      oneLine`Drinking water, including bottled water, may reasonably be
      expected to contain at least small amounts of some contaminants. The
      presence of contaminants does not necessarily indicate that water poses a
      health risk. More information about contaminants and potential health
      effects can be obtained by calling the Environmental Protection Agency's
      safe drinking water hotline (800-426-4791).`,
      oneLine` Some people may be more vulnerable to contaminants in drinking
      water than the general population. Immuno-compromised persons such as
      persons with cancer undergoing chemotherapy, persons who have undergone
      organ transplants, people with HIV/AIDS or other immune systems disorders,
      some elderly, and infants can be particularly at risk from infections.
      These people should seek advice about drinking water from their health
      care providers. EPA/CDC guidelines on appropriate means to lessen the
      risk of infection by cryptosporidium and other microbial contaminants
      are available from the Environmental Protection Agency's safe drinking
      water hotline (800-426-4791). `,
    ],
  },
  addl_health_info: {
    title: 'Additional Health Information',
    content: oneLine`If present, elevated levels of lead can cause serious
    health problems, especially for pregnant women and young children. Lead in
    drinking water is primarily from materials and components associated with
    service lines and home plumbing. Lake Forest Water Coop is responsible for
    providing high quality drinking water, but cannot control the variety of
    materials used in plumbing components. When your water has been sitting for
    several hours, you can minimize the potential for lead exposure by flushing
    your tap for 30 seconds to 2 minutes before using water for drinking or
    cooking. If you are concerned about lead in your water, you may wish to have
    your water tested. Information on lead in drinking water, testing methods,
    and steps you can take to minimize exposure is available from the Safe
    Drinking Water Hotline or at www.epa.gov/safewater/lead.`,
  },
};
