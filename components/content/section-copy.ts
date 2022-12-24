import { oneLine } from 'common-tags';
import { SectionContent } from 'components/content/section';

export const SECTION_COPY: SectionContent[] = [
  {
    title: 'Water System Information',
    content: oneLine`If you would like to know more about the information
    contained in this report, please contact Ronald Slane at(608) 256-1513.`,
  },
  {
    title: 'Opportunity for input on decisions affecting your water quality',
    content: 'To comment on water quality contact Gary Davis at (608) 239-8039.',
  },
  {
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
];
