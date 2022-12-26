/* eslint-disable max-lines -- lots of content in here */
import { Section } from 'components/content/section';
import { SECTION_COPY } from 'components/content/section-copy';
import { ReportTable, ReportTableBody, ReportTableHead } from 'components/content/table';
import Link from 'next/link';
import React from 'react';
import { MaxWidthContainer } from 'styles/design-system/max-width-container';

export const MainContent: React.FC = () => {
  return (
    <>
      <MaxWidthContainer className='flex flex-col self-center px-6 text-gray-700'>
        <div className='mb-6 flex flex-col font-serif text-black'>
          <h1 className='text-3xl font-bold'>
            <i className='fa-solid fa-faucet-drip mr-4'></i>2021 Consumer Confidence Report Data
          </h1>
          <h2 className='text-xl font-semibold'>
            LAKE FOREST WATER COOP,{' '}
            <Link
              className='underline hover:text-gray-500'
              href='https://dnr.wi.gov/dwsviewer/DS/View/134786'
              rel='nofollow'>
              PWS ID: 11302324
            </Link>
          </h2>
        </div>

        <Section content={SECTION_COPY.i18n_info.content} className={'mb-6 italic'} />

        <Section title={SECTION_COPY.water_sys_info.title} className={'mb-4'} />
        <Section content={SECTION_COPY.water_sys_info.content} className={'mb-6'} />

        <Section title={SECTION_COPY.input_oppty.title} className={'mb-4'} />
        <Section content={SECTION_COPY.input_oppty.content} className={'mb-6'} />

        <Section title={SECTION_COPY.health_info.title} className={'mb-4'} />
        <Section content={SECTION_COPY.health_info.content} className={'mb-6'} />

        <Section title={SECTION_COPY.sources_info.title} className={'mb-4'} />
        <ReportTable className='mb-6'>
          <ReportTableHead>
            <tr>
              <th>Source ID</th>
              <th>Source</th>
              <th>Depth (in feet)</th>
              <th>Status</th>
            </tr>
          </ReportTableHead>
          <ReportTableBody>
            <tr>
              <td>1</td>
              <td>Groundwater</td>
              <td>147</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Groundwater</td>
              <td>253</td>
              <td>Active</td>
            </tr>
          </ReportTableBody>
        </ReportTable>
        <Section content={SECTION_COPY.sources_info.content} className={'mb-6'} />

        <Section content={SECTION_COPY.educational_info.title} className={'mb-4'} />
        <Section content={SECTION_COPY.educational_info.content} className={'mb-2'} />
        <Section list={SECTION_COPY.educational_info.list} className={'mb-6'} />
        <Section content={SECTION_COPY.education_epilogue.content} className={'mb-6'} />

        <Section title='Definitions' className={'mb-4'} />
      </MaxWidthContainer>
      <div className='w-full overflow-scroll px-6'>
        <ReportTable className='mb-6'>
          <ReportTableHead>
            <tr>
              <th>Term</th>
              <th>Definition</th>
            </tr>
          </ReportTableHead>
          <ReportTableBody>
            <tr>
              <td className='font-medium'>AL</td>
              <td>
                <span>Action Level:</span> The concentration of a contaminant which, if exceeded, triggers treatment or
                other requirements which a water system must follow.
              </td>
            </tr>
            <tr>
              <td className='font-medium'>HAL</td>
              <td>
                <span>Health Advisory Level:</span> The concentration of a contaminant which, if exceeded, poses a
                health risk and may require a system to post a public notice.
              </td>
            </tr>
            <tr>
              <td className='font-medium'>Level 1 Assessment</td>
              <td>
                A Level 1 assessment is a study of the water system to identify potential problems and determine, if
                possible, why total coliform bacteria have been found in our water system.
              </td>
            </tr>
            <tr>
              <td className='font-medium'>Level 2 Assessment</td>
              <td>
                A Level 2 assessment is a very detailed study of the water system to identify potential problems and
                determine, if possible, why an E. coli MCL violation has occurred or why total coliform bacteria have
                been found in our water system, or both, on multiple occasions.
              </td>
            </tr>
            <tr>
              <td className='font-medium'>MCL</td>
              <td>
                <span>Maximum Contaminant Level:</span> The highest level of a contaminant that is allowed in drinking
                water. MCLs are set as close to the MCLGs as feasible using the best available treatment technology.
              </td>
            </tr>
            <tr>
              <td className='font-medium'>MCLG</td>
              <td>
                <span>Maximum Contaminant Level Goal:</span> The level of a contaminant in drinking water below which
                there is no known or expected risk to health. MCLGs allow for a margin of safety.
              </td>
            </tr>
            <tr>
              <td className='font-medium'>MFL</td>
              <td>million fibers per liter</td>
            </tr>
            <tr>
              <td className='font-medium'>MRDL</td>
              <td>
                <span>Maximum residual disinfectant level:</span> The highest level of a disinfectant allowed in
                drinking water. There is convincing evidence that addition of a disinfectant is necessary for control of
                microbial contaminants.
              </td>
            </tr>
            <tr>
              <td className='font-medium'>MRDLG</td>
              <td>
                <span>Maximum residual disinfectant level goal:</span> The level of a drinking water disinfectant below
                which there is no known or expected risk to health. MRDLGs do not reflect the benefits of the use of
                disinfectants to control microbial contaminants.
              </td>
            </tr>
            <tr>
              <td className='font-medium'>mrem/year</td>
              <td>
                <span>millirems per year</span> (a measure of radiation absorbed by the body)
              </td>
            </tr>
            <tr>
              <td className='font-medium'>NTU</td>
              <td>Nephelometric Turbidity Units</td>
            </tr>
            <tr>
              <td className='font-medium'>pCi/l</td>
              <td>
                <span>picocuries per liter</span> (a measure of radioactivity)
              </td>
            </tr>
            <tr>
              <td className='font-medium'>ppm</td>
              <td>
                <span>parts per million,</span> or milligrams per liter (mg/l)
              </td>
            </tr>
            <tr>
              <td className='font-medium'>ppb</td>
              <td>
                <span>parts per billion,</span> or micrograms per liter (ug/l)
              </td>
            </tr>
            <tr>
              <td className='font-medium'>ppt</td>
              <td>
                <span>parts per trillion,</span> or nanograms per liter
              </td>
            </tr>
            <tr>
              <td className='font-medium'>ppq</td>
              <td>
                <span>parts per quadrillion,</span> or picograms per liter
              </td>
            </tr>
            <tr>
              <td className='font-medium'>SMCL</td>
              <td>
                Secondary drinking water standards or <span>Secondary Maximum Contaminant Levels</span> for contaminants
                that affect taste, odor, or appearance of the drinking water. The SMCLs do not represent health
                standards.
              </td>
            </tr>
            <tr>
              <td className='font-medium'>TCR</td>
              <td>Total Coliform Rule</td>
            </tr>
            <tr>
              <td className='font-medium'>TT</td>
              <td>
                <span>Treatment Technique:</span> A required process intended to reduce the level of a contaminant in
                drinking water.
              </td>
            </tr>
          </ReportTableBody>
        </ReportTable>
      </div>
      <MaxWidthContainer className='flex flex-col self-center px-6 text-gray-700'>
        <Section title={SECTION_COPY.detected_contaminants.title} className={'mb-4'} />
        <Section content={SECTION_COPY.detected_contaminants.content} className={'mb-6'} />
        <Section className='mb-4' title='Inorganic Contaminants' />
      </MaxWidthContainer>
      <div className='w-full overflow-scroll px-6'>
        <ReportTable className='mb-6'>
          <ReportTableHead>
            <tr>
              <th>Contaminant (units)</th>
              <th>Site</th>
              <th>MCL</th>
              <th>MCLG</th>
              <th>Level Found</th>
              <th>Range</th>
              <th>Sample Date (if prior to 2021)</th>
              <th>Violation</th>
              <th>Typical Source of Contaminant</th>
            </tr>
          </ReportTableHead>
          <ReportTableBody>
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
          </ReportTableBody>
        </ReportTable>
      </div>
      {/* TODO: Gil Note: Better divider class than just 'full screen divider' */}
      <div className='mb-12 w-full w-full overflow-scroll border-t-2 border-gray-100 px-6 px-6 pt-6'>
        <ReportTable>
          <ReportTableHead>
            <tr>
              <th>Contaminant (units)</th>
              <th>Action Level</th>
              <th>MCLG</th>
              <th>90th Percentile Level Found</th>
              <th># of Results</th>
              <th>Sample Date (if prior to 2021)</th>
              <th>Violation</th>
              <th>Typical Source of Contaminant</th>
            </tr>
          </ReportTableHead>
          <ReportTableBody>
            <tr>
              <td>COPPER (ppm)</td>
              <td>AL=1.3</td>
              <td>1.3</td>
              <td>0.0476</td>
              <td>0 of 5 results were above the action level.</td>
              <td></td>
              <td>No</td>
              <td>
                Corrosion of household plumbing systems; Erosion of natural deposits; Leaching from wood preservatives
              </td>
            </tr>
            <tr>
              <td>LEAD (ppb)</td>
              <td>AL=15</td>
              <td>0</td>
              <td>5.6</td>
              <td>0 of 5 results were above the action level.</td>
              <td></td>
              <td>No</td>
              <td>Corrosion of household plumbing systems; Erosion of natural deposits</td>
            </tr>
          </ReportTableBody>
        </ReportTable>
      </div>

      <MaxWidthContainer className='flex flex-col self-center px-6 text-gray-700'>
        <Section title='Radioactive Contaminants' className='mb-4' />
      </MaxWidthContainer>

      <div className='mb-12 w-full w-full overflow-scroll px-6 px-6 pt-6'>
        <ReportTable className='mb-6'>
          <ReportTableHead>
            <tr>
              <th>Contaminant (units)</th>
              <th>Site</th>
              <th>MCL</th>
              <th>MCLG</th>
              <th>Level Found</th>
              <th>Range</th>
              <th>Sample Date (if prior to 2021)</th>
              <th>Violation</th>
              <th>Typical Source of Contaminant</th>
            </tr>
          </ReportTableHead>
          <ReportTableBody>
            <tr>
              <td>GROSS ALPHA, EXCL. R & U (pCi/l)</td>
              <td></td>
              <td>15</td>
              <td>0</td>
              <td>1.7</td>
              <td>1.5 - 1.7</td>
              <td></td>
              <td>No</td>
              <td>Erosion of natural deposits</td>
            </tr>
            <tr>
              <td>RADIUM, (226 + 228) (pCi/l)</td>
              <td></td>
              <td>5</td>
              <td>0</td>
              <td>0.2</td>
              <td>0.2 - 0.2</td>
              <td></td>
              <td>No</td>
              <td>Erosion of natural deposits</td>
            </tr>
            <tr>
              <td>GROSS ALPHA, INCL. R & U (n/a)</td>
              <td></td>
              <td>n/a</td>
              <td>n/a</td>
              <td>1.7</td>
              <td>1.5 - 1.7</td>
              <td></td>
              <td>No</td>
              <td>Erosion of natural deposits</td>
            </tr>
          </ReportTableBody>
        </ReportTable>
      </div>

      <MaxWidthContainer className='flex flex-col self-center px-6 text-gray-700'>
        <Section title='Synthetic Organic Contaminants including Pesticides and Herbicides' className='mb-4' />
      </MaxWidthContainer>

      <div className='mb-12 w-full w-full overflow-scroll px-6 px-6 pt-6'>
        <ReportTable className='mb-6'>
          <ReportTableHead>
            <tr>
              <th>Contaminant (units)</th>
              <th>Site</th>
              <th>MCL</th>
              <th>MCLG</th>
              <th>Level Found</th>
              <th>Range</th>
              <th>Sample Date (if prior to 2021)</th>
              <th>Violation</th>
              <th>Typical Source of Contaminant</th>
            </tr>
          </ReportTableHead>
          <ReportTableBody>
            <tr>
              <td>DI(2-ETHYLHEXYL) PHTHALATE (ppb)</td>
              <td></td>
              <td>6</td>
              <td>0</td>
              <td>0.6</td>
              <td>0.0 - 0.6</td>
              <td></td>
              <td>No</td>
              <td>Discharge from rubber and chemical factories </td>
            </tr>
          </ReportTableBody>
        </ReportTable>
      </div>

      <MaxWidthContainer className='flex flex-col self-center px-6 text-gray-700'>
        <Section title={SECTION_COPY.health_advisory.title} className={'mb-4'} />
        <Section content={SECTION_COPY.health_advisory.content} className={'mb-6'} />{' '}
      </MaxWidthContainer>

      <div className='mb-12 w-full w-full overflow-scroll px-6 px-6 pt-6'>
        <ReportTable className='mb-6'>
          <ReportTableHead>
            <tr>
              <th>Contaminant (units)</th>
              <th>Site</th>
              <th>SMCL (ppm)</th>
              <th>HAL (ppm)</th>
              <th>Level Found</th>
              <th>Range</th>
              <th>Sample Date (if prior to 2021)</th>
              <th>Typical Source of Contaminant</th>
            </tr>
          </ReportTableHead>
          <ReportTableBody>
            <tr>
              <td>CHLORIDE (ppm)</td>
              <td></td>
              <td>250</td>
              <td></td>
              <td>1.8</td>
              <td>1.45 - 1.80</td>
              <td>5/14/2018</td>
              <td>Runoff/leaching from natural deposits, road salt, water softeners</td>
            </tr>
            <tr>
              <td>ZINC (ppm)</td>
              <td></td>
              <td>5</td>
              <td></td>
              <td>0.01</td>
              <td>0.00 - 0.01</td>
              <td>5/14/2018</td>
              <td>Runoff/leaching from natural deposits, industrial wastes</td>
            </tr>
          </ReportTableBody>
        </ReportTable>
      </div>

      <MaxWidthContainer className='flex flex-col self-center px-6 text-gray-700'>
        <Section title={SECTION_COPY.addl_health_info.title} className='mb-4' />
        <Section content={SECTION_COPY.addl_health_info.content} />
      </MaxWidthContainer>
    </>
  );
};
/* eslint-enable max-lines -- ^^^ */
