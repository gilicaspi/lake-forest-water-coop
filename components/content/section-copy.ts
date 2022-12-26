import { oneLine } from 'common-tags';

export interface SectionContent {
  title?: string;
  content?: string | string[];
  list?: string[];
}

export const SECTION_COPY: Record<string, SectionContent> = {
  i18n_info: {
    content: [
      oneLine`Este informe contiene información importante acerca de su agua
      potable. Haga que alguien lo traduzca para usted, o hable con alguien que
      lo entienda.`,
      oneLine` Dlaim ntawv tshaabzu nuav muaj lug tseemceeb heev nyob rua huv
      kws has txug cov dlej mej haus. Kuas ib tug paab txhais rua koj, los nrug
      ib tug kws paub lug thaam. `,
    ],
  },
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
  sources_info: {
    title: 'Source(s) of Water',
    content: oneLine`To obtain a summary of the source water assessment please
    contact, Ronald Slane at (608) 256-1513.`,
  },
  educational_info: {
    title: 'Educational Information',
    content: [
      oneLine`The sources of drinking water, both tap water and bottled water,
      include rivers, lakes, streams, ponds, reservoirs, springs and wells. As
      water travels over the surface of the land or through the ground, it
      dissolves naturally occurring minerals and, in some cases, radioactive
      material, and can pick up substances resulting from the presence of
      animals or from human activity.`,
      oneLine`Contaminants that may be present in source water include:`,
    ],
    list: [
      oneLine`Microbial contaminants, such as viruses and bacteria, which may
      come from sewage treatment plants, septic systems, agricultural livestock
      operations and wildlife.`,
      oneLine`Inorganic contaminants, such as salts and metals, which can be
      naturally- occurring or result from urban stormwater runoff, industrial or
      domestic wastewater discharges, oil and gas production, mining or farming.`,
      oneLine`Pesticides and herbicides, which may come from a variety of
      sources such as agriculture, urban stormwater runoff and residential uses.`,
      oneLine`Organic chemical contaminants, including synthetic and volatile
      organic chemicals, which are by-products of industrial processes and
      petroleum production, and can also come from gas stations, urban
      stormwater runoff and septic systems.`,
      oneLine`Radioactive contaminants, which can be naturally occurring or be
      the result of oil and gas production and mining activities.`,
    ],
  },
  // TODO: Gil Note: This is part of educational_info. How to refactor object to
  //                 include arbitrary markdown-ish content
  education_epilogue: {
    content: oneLine`In order to ensure that tap water is safe to drink, EPA
    prescribes regulations that limit the amount of certain contaminants in
    water provided by public water systems. FDA regulations establish limits
    for contaminants in bottled water, which shall provide the same protection
    for public health.`,
  },
  detected_contaminants: {
    title: 'Detected Contaminants',
    content: oneLine`Your water was tested for many contaminants last year. We
    are allowed to monitor for some contaminants less frequently than once a
    year. The following tables list only those contaminants which were detected
    in your water. If a contaminant was detected last year, it will appear in
    the following tables without a sample date. If the contaminant was not
    monitored last year, but was detected within the last 5 years, it will
    appear in the tables below along with the sample date.`,
  },
  health_advisory: {
    title: oneLine`Contaminants with a Health Advisory Level or a Secondary
    Maximum Contaminant Level`,
    content: oneLine`The following tables list contaminants which were detected
    in your water and that have either a Health Advisory Level (HAL) or a
    Secondary Maximum Contaminant Level (SMCL), or both. There are no violations
    for detections of contaminants that exceed Health Advisory Levels,
    Groundwater Standards or Secondary Maximum Contaminant Levels. Secondary
    Maximum Contaminant Levels are levels that do not present health concerns
    but may pose aesthetic problems such as objectionable taste, odor, or color.
    Health Advisory Levels are levels at which concentrations of the contaminant
    present a health risk.`,
  },
};
