import { Section } from 'components/content/section';
import { SECTION_COPY } from 'components/content/section-copy';
import React from 'react';

export const MainContent: React.FC = () => {
  return (
    <div className='flex w-full flex-col self-center p-6 text-gray-700 md:w-[800px]'>
      <div className='mb-6 flex flex-col font-serif text-black'>
        <h1 className='text-3xl font-bold'>
          <i className='fa-solid fa-faucet-drip'></i>2021 Consumer Confidence Report Data
        </h1>
        <h2 className='text-xl font-semibold'>LAKE FOREST WATER COOP, PWS ID: 11302324</h2>
      </div>

      <div className='mb-6 flex flex-col'>
        <span className='font-sans text-base font-normal italic'>
          Este informe contiene información importante acerca de su agua potable. Haga que alguien lo traduzca para
          usted, o hable con alguien que lo entienda.
        </span>
        <span className='font-sans text-base font-normal italic'>
          Dlaim ntawv tshaabzu nuav muaj lug tseemceeb heev nyob rua huv kws has txug cov dlej mej haus. Kuas ib tug
          paab txhais rua koj, los nrug ib tug kws paub lug thaam.
        </span>
      </div>

      {SECTION_COPY.map((s) => (
        <Section content={s.content} title={s.title} className={'mb-6'} />
      ))}

      <div className='mb-6 flex flex-col'>
        <span className='font-serif font-semibold text-gray-600'>Source(s) of Water</span>
        <table className='table'>
          <thead>
            <th>Source ID</th>
            <th>Source</th>
            <th>Depth (in feet)</th>
            <th>Status</th>
          </thead>
          <tr>
            <td className='table--number'>1</td>
            <td>Groundwater</td>
            <td className='table--number'>147</td>
            <td>Active</td>
          </tr>
          <tr>
            <td className='table--number'>2</td>
            <td>Groundwater</td>
            <td className='table--number'>253</td>
            <td>Active</td>
          </tr>
        </table>
        <span className='font-sans text-base font-normal'>
          To obtain a summary of the source water assessment please contact, Ronald Slane at (608) 256-1513.
        </span>
      </div>

      {/* TODO: Gil Note: Maybe this all just needs to render markdown? */}
      <div className='mb-6 flex flex-col'>
        <span className='font-serif font-semibold text-gray-600'>Educational Information</span>
        <span className='font-sans text-base font-normal'>
          The sources of drinking water, both tap water and bottled water, include rivers, lakes, streams, ponds,
          reservoirs, springs and wells. As water travels over the surface of the land or through the ground, it
          dissolves naturally occurring minerals and, in some cases, radioactive material, and can pick up substances
          resulting from the presence of animals or from human activity.
        </span>
        <span className='font-sans text-base font-normal'>
          Contaminants that may be present in source water include:
        </span>
        <ul>
          <li className=''>
            Microbial contaminants, such as viruses and bacteria, which may come from sewage treatment plants, septic
            systems, agricultural livestock operations and wildlife.
          </li>
          <li className=''>
            Inorganic contaminants, such as salts and metals, which can be naturally- occurring or result from urban
            stormwater runoff, industrial or domestic wastewater discharges, oil and gas production, mining or farming.
          </li>
          <li className=''>
            Pesticides and herbicides, which may come from a variety of sources such as agriculture, urban stormwater
            runoff and residential uses.
          </li>
          <li className=''>
            Organic chemical contaminants, including synthetic and volatile organic chemicals, which are by-products of
            industrial processes and petroleum production, and can also come from gas stations, urban stormwater runoff
            and septic systems.
          </li>
          <li className=''>
            Radioactive contaminants, which can be naturally occurring or be the result of oil and gas production and
            mining activities.
          </li>
        </ul>
        <span className='font-sans text-base font-normal'>
          In order to ensure that tap water is safe to drink, EPA prescribes regulations that limit the amount of
          certain contaminants in water provided by public water systems. FDA regulations establish limits for
          contaminants in bottled water, which shall provide the same protection for public health.
        </span>
      </div>

      <div className='mb-6 flex flex-col'>
        <span className='font-serif font-semibold text-gray-600'>Definitions</span>

        <table className='table'>
          <thead>
            <th className='table--bold'>Term</th>
            <th className='table--justify'>Definition</th>
          </thead>
          <tr>
            <td className='table--bold'>AL</td>
            <td className='table--justify'>
              <span className='table--bold'>Action Level:</span> The concentration of a contaminant which, if exceeded,
              triggers treatment or other requirements which a water system must follow.
            </td>
          </tr>
          <tr>
            <td className='table--bold'>HAL</td>
            <td className='table--justify'>
              <span className='table--bold'>Health Advisory Level:</span> The concentration of a contaminant which, if
              exceeded, poses a health risk and may require a system to post a public notice.
            </td>
          </tr>
          <tr>
            <td className='table--bold'>Level 1 Assessment</td>
            <td className='table--justify'>
              A Level 1 assessment is a study of the water system to identify potential problems and determine, if
              possible, why total coliform bacteria have been found in our water system.
            </td>
          </tr>
          <tr>
            <td className='table--bold'>Level 2 Assessment</td>
            <td className='table--justify'>
              A Level 2 assessment is a very detailed study of the water system to identify potential problems and
              determine, if possible, why an E. coli MCL violation has occurred or why total coliform bacteria have been
              found in our water system, or both, on multiple occasions.
            </td>
          </tr>
          <tr>
            <td className='table--bold'>MCL</td>
            <td className='table--justify'>
              <span className='table--bold'>Maximum Contaminant Level:</span> The highest level of a contaminant that is
              allowed in drinking water. MCLs are set as close to the MCLGs as feasible using the best available
              treatment technology.
            </td>
          </tr>
          <tr>
            <td className='table--bold'>MCLG</td>
            <td className='table--justify'>
              <span className='table--bold'>Maximum Contaminant Level Goal:</span> The level of a contaminant in
              drinking water below which there is no known or expected risk to health. MCLGs allow for a margin of
              safety.
            </td>
          </tr>
          <tr>
            <td className='table--bold'>MFL</td>
            <td className='table--justify'>million fibers per liter</td>
          </tr>
          <tr>
            <td className='table--bold'>MRDL</td>
            <td className='table--justify'>
              <span className='table--bold'>Maximum residual disinfectant level:</span> The highest level of a
              disinfectant allowed in drinking water. There is convincing evidence that addition of a disinfectant is
              necessary for control of microbial contaminants.
            </td>
          </tr>
          <tr>
            <td className='table--bold'>MRDLG</td>
            <td className='table--justify'>
              <span className='table--bold'>Maximum residual disinfectant level goal:</span> The level of a drinking
              water disinfectant below which there is no known or expected risk to health. MRDLGs do not reflect the
              benefits of the use of disinfectants to control microbial contaminants.
            </td>
          </tr>
          <tr>
            <td className='table--bold'>mrem/year</td>
            <td className='table--justify'>
              <span className='table--bold'>millirems per year</span> (a measure of radiation absorbed by the body)
            </td>
          </tr>
          <tr>
            <td className='table--bold'>NTU</td>
            <td className='table--justify'>Nephelometric Turbidity Units</td>
          </tr>
          <tr>
            <td className='table--bold'>pCi/l</td>
            <td className='table--justify'>
              <span className='table--bold'>picocuries per liter</span> (a measure of radioactivity)
            </td>
          </tr>
          <tr>
            <td className='table--bold'>ppm</td>
            <td className='table--justify'>
              <span className='table--bold'>parts per million,</span> or milligrams per liter (mg/l)
            </td>
          </tr>
          <tr>
            <td className='table--bold'>ppb</td>
            <td className='table--justify'>
              <span className='table--bold'>parts per billion,</span> or micrograms per liter (ug/l)
            </td>
          </tr>
          <tr>
            <td className='table--bold'>ppt</td>
            <td className='table--justify'>
              <span className='table--bold'>parts per trillion,</span> or nanograms per liter
            </td>
          </tr>
          <tr>
            <td className='table--bold'>ppq</td>
            <td className='table--justify'>
              <span className='table--bold'>parts per quadrillion,</span> or picograms per liter
            </td>
          </tr>
          <tr>
            <td className='table--bold'>SMCL</td>
            <td className='table--justify'>
              Secondary drinking water standards or{' '}
              <span className='table--bold'>Secondary Maximum Contaminant Levels</span> for contaminants that affect
              taste, odor, or appearance of the drinking water. The SMCLs do not represent health standards.
            </td>
          </tr>
          <tr>
            <td className='table--bold'>TCR</td>
            <td className='table--justify'>Total Coliform Rule</td>
          </tr>
          <tr>
            <td className='table--bold'>TT</td>
            <td className='table--justify'>
              <span className='table--bold'>Treatment Technique:</span> A required process intended to reduce the level
              of a contaminant in drinking water.
            </td>
          </tr>
        </table>
      </div>

      <div className='mb-6 flex flex-col'>
        <span className='font-serif font-semibold text-gray-600'>Detected Contaminants</span>
        <span className='font-sans text-base font-normal'>
          Your water was tested for many contaminants last year. We are allowed to monitor for some contaminants less
          frequently than once a year. The following tables list only those contaminants which were detected in your
          water. If a contaminant was detected last year, it will appear in the following tables without a sample date.
          If the contaminant was not monitored last year, but was detected within the last 5 years, it will appear in
          the tables below along with the sample date.
        </span>
        <span className='block__subtitle'>Inorganic Contaminants</span>

        <table className='full-width-table table'>
          {/* <!--      TODO: Gil Note: Maybe this needs to be wider? --> */}
          <thead>
            <th>Contaminant (units)</th>
            <th>Site</th>
            <th>MCL</th>
            <th>MCLG</th>
            <th>Level Found</th>
            <th>Range</th>
            <th>Sample Date (if prior to 2021)</th>
            <th>Violation</th>
            <th>Typical Source of Contaminant</th>
          </thead>
          <tr>
            <td>BARIUM (ppm)</td>
            <td></td>
            <td>2</td>
            <td>2</td>
            <td>0.022</td>
            <td>0.011 - 0.022</td>
            <td>5/14/2018</td>
            <td>No</td>
            <td>Discharge of drilling wastes; Discharge from metal refineries; Erosion of natural deposits</td>
          </tr>
          <tr>
            <td>CHROMIUM (ppb)</td>
            <td></td>
            <td>100</td>
            <td>100</td>
            <td>3</td>
            <td>2 - 3</td>
            <td>5/14/2018</td>
            <td>No</td>
            <td>Discharge from steel and pulp mills; Erosion of natural deposits</td>
          </tr>
          <tr>
            <td>FLUORIDE (ppm)</td>
            <td></td>
            <td>4</td>
            <td>4</td>
            <td>0.1</td>
            <td>0.1 - 0.1</td>
            <td>5/14/2018</td>
            <td>No</td>
            <td>
              Erosion of natural deposits; Water additive which promotes strong teeth; Discharge from fertilizer and
              aluminum factories
            </td>
          </tr>
          <tr>
            <td>NITRATE (N03-N) (ppm)</td>
            <td></td>
            <td>10</td>
            <td>10</td>
            <td>0.17</td>
            <td>0.15 - 0.17</td>
            <td></td>
            <td>No</td>
            <td>Runoff from fertilizer use; Leaching from septic tanks, sewage; Erosion of natural deposits</td>
          </tr>
          <tr>
            <td>SODIUM (ppm)</td>
            <td></td>
            <td>n/a</td>
            <td>n/a</td>
            <td>2.35</td>
            <td>2.14 - 2.35</td>
            <td></td>
            <td>No</td>
            <td>n/a</td>
          </tr>
        </table>
      </div>

      <div className='mb-6 flex flex-col'>
        <span className='font-serif font-semibold text-gray-600'>title</span>
        <span className='font-sans text-base font-normal'>content</span>
      </div>

      <div className='mb-6 flex flex-col'>
        <span className='font-serif font-semibold text-gray-600'>title</span>
        <span className='font-sans text-base font-normal'>content</span>
      </div>
    </div>

    // <!--
    //
    //
    //
    //
    //
    //
    //
    // Contaminant (units)
    //
    // Action Level
    //
    // MCLG
    //
    // 90th Percentile Level Found
    //
    // # of Results
    //
    // Sample Date (if prior to 2021)
    //
    // Violation
    //
    // Typical Source of Contaminant
    //
    // COPPER (ppm)
    //
    // AL=1.3
    //
    // 1.3
    //
    // 0.0476
    //
    // 0 of 5 results were above the action level.
    //
    // No
    //
    // Corrosion of household plumbing systems; Erosion of natural deposits; Leaching from wood preservatives
    //
    // LEAD (ppb)
    //
    // AL=15
    //
    // 0
    //
    // 5.60
    //
    // 0 of 5 results were above the action level.
    //
    // No
    //
    // Corrosion of household plumbing systems; Erosion of natural deposits
    //
    // Radioactive Contaminants
    // Contaminant (units)
    //
    // Site
    //
    // MCL
    //
    // MCLG
    //
    // Level Found
    //
    // Range
    //
    // Sample Date (if prior to 2021)
    //
    // Violation
    //
    // Typical Source of Contaminant
    //
    // GROSS ALPHA, EXCL. R & U (pCi/l)
    //
    // 15
    //
    // 0
    //
    // 1.7
    //
    // 1.5 - 1.7
    //
    // No
    //
    // Erosion of natural deposits
    //
    // RADIUM, (226 + 228) (pCi/l)
    //
    // 5
    //
    // 0
    //
    // 0.2
    //
    // 0.2 - 0.2
    //
    // No
    //
    // Erosion of natural deposits
    //
    // GROSS ALPHA, INCL. R & U (n/a)
    //
    // n/a
    //
    // n/a
    //
    // 1.7
    //
    // 1.5 - 1.7
    //
    // No
    //
    // Erosion of natural deposits
    //
    // Synthetic Organic Contaminants including Pesticides and Herbicides
    // Contaminant (units)
    //
    // Site
    //
    // MCL
    //
    // MCLG
    //
    // Level Found
    //
    // Range
    //
    // Sample Date (if prior to 2021)
    //
    // Violation
    //
    // Typical Source of Contaminant
    //
    // DI(2-ETHYLHEXYL) PHTHALATE (ppb)
    //
    // 6
    //
    // 0
    //
    // 0.6
    //
    // 0.0 - 0.6
    //
    // No
    //
    // Discharge from rubber and chemical factories
    //
    // Contaminants with a Health Advisory Level or a Secondary Maximum Contaminant Level
    // The following tables list contaminants which were detected in your water and that have either a Health Advisory Level (HAL) or a Secondary Maximum Contaminant Level (SMCL), or both. There are no violations for detections of contaminants that exceed Health Advisory Levels, Groundwater Standards or Secondary Maximum Contaminant Levels. Secondary Maximum Contaminant Levels are levels that do not present health concerns but may pose aesthetic problems such as objectionable taste, odor, or color. Health Advisory Levels are levels at which concentrations of the contaminant present a health risk.
    //
    //
    //
    // Contaminant (units)
    //
    // Site
    //
    // SMCL (ppm)
    //
    // HAL (ppm)
    //
    // Level Found
    //
    // Range
    //
    // Sample Date (if prior to 2021)
    //
    // Typical Source of Contaminant
    //
    // CHLORIDE (ppm)
    //
    // 250
    //
    // 1.80
    //
    // 1.45 - 1.80
    //
    // 5/14/2018
    //
    // Runoff/leaching from natural deposits, road salt, water softeners
    //
    // ZINC (ppm)
    //
    // 5
    //
    // 0.01
    //
    // 0.00 - 0.01
    //
    // 5/14/2018
    //
    // Runoff/leaching from natural deposits, industrial wastes
    //
    // Additional Health Information
    // If present, elevated levels of lead can cause serious health problems, especially for pregnant women and young children. Lead in drinking water is primarily from materials and components associated with service lines and home plumbing. Lake Forest Water Coop is responsible for providing high quality drinking water, but cannot control the variety of materials used in plumbing components. When your water has been sitting for several hours, you can minimize the potential for lead exposure by flushing your tap for 30 seconds to 2 minutes before using water for drinking or cooking. If you are concerned about lead in your water, you may wish to have your water tested. Information on lead in drinking water, testing methods, and steps you can take to minimize exposure is available from the Safe Drinking Water Hotline or at www.epa.gov/safewater/lead.
    // -->
  );
};
