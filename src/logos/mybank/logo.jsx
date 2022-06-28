/* @flow */
/** @jsx node */

import { node, type ComponentNode } from "@krakenjs/jsx-pragmatic/src";

import { SVGLogo, getLogoColors, type SVGLogoProps } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
import { type LogoColorMap } from "../../types";

const LOGO_COLORS: LogoColorMap = {
  [LOGO_COLOR.DEFAULT]: {
    primary: "#00C0EE",
    secondary: "#1a4b67",
  },
  [LOGO_COLOR.WHITE]: {
    primary: "#ffffff",
    secondary: "#ffffff",
  },
  [LOGO_COLOR.BLACK]: {
    primary: "#1A4B67",
    secondary: "#00C0EE",
  },
};

export function MybankLogo({
  logoColor = LOGO_COLOR.DEFAULT,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const { primary, secondary } = getLogoColors(
    LOGO.MYBANK,
    LOGO_COLORS,
    logoColor
  );

  return (
    <SVGLogo
      {...props}
      name={LOGO.MYBANK}
      logoColor={logoColor}
      render={() => {
        return (
          <svg
            width="58px"
            height="32px"
            viewBox="0 0 58 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>MyBank</title>
            <desc>Created with Sketch.</desc>
            <defs>
              <polygon
                id="path-1"
                points="3.086436e-05 0.00960615385 42.6159033 0.00960615385 42.6159033 24 3.086436e-05 24"
              />
            </defs>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              transform="matrix(1.333867, 0, 0, 1.333867, -0.00001, -0.00321)"
            >
              <g
                id="SPB_&amp;_AltPay_NewAssets"
                transform="translate(-100.000000, -159.000000)"
              >
                <g id="MyBank" transform="translate(100.000000, 159.000000)">
                  <path
                    d="M29.010016,14.6206556 C29.010016,14.6206556 27.947442,14.8389924 27.9585564,14.0777038 C27.9698571,13.3164773 29.8942008,13.3619719 30.0914038,13.4236258 C30.0914038,13.4236258 30.1519432,14.2874637 29.010016,14.6206556 M29.3297879,9.81836571 C27.677716,9.80301439 26.9053582,10.753926 26.9053582,10.753926 C26.4037199,11.2864986 26.7253546,12.0076376 27.2173686,12.0597202 C27.924406,12.1345501 27.9170171,11.5413802 29.0022546,11.2784811 C29.9542434,11.0477763 29.9954723,11.9305703 29.9954723,11.9305703 C25.9352386,11.8295126 26.1290887,15.239929 27.5113104,15.9642377 C28.8367183,16.658714 30.0756326,15.7825701 30.0756326,15.7825701 C30.0756326,15.7825701 30.1222013,16.2545455 30.777951,16.2545455 C31.5283904,16.2545455 31.5272727,15.5049412 31.5272727,15.5049412 L31.5242302,12.1853897 C31.4748674,9.75671183 29.3297879,9.81836571 29.3297879,9.81836571"
                    id="Fill-1"
                    fill={secondary}
                  />
                  <path
                    d="M42.4169651,14.9132636 L40.766254,12.4266353 L41.9794586,11.2784792 C41.9794586,11.2784792 42.5394372,10.7597112 42.0797024,10.2455911 C41.5701862,9.67606803 40.9629029,10.2382165 40.9629029,10.2382165 L39.4383789,11.6556411 L39.4383789,8.81056644 C39.4383789,8.40291433 39.1083605,8.07272727 38.7011934,8.07272727 C38.2936547,8.07272727 37.9636364,8.40291433 37.9636364,8.81056644 L37.9636364,15.5050966 C37.9636364,15.9126248 38.2936547,16.2429358 38.7011934,16.2429358 C39.1083605,16.2429358 39.4383789,15.9126248 39.4383789,15.5050966 L39.4383789,13.7227806 L39.7172538,13.4440304 L41.2106953,15.7865117 C41.2106953,15.7865117 41.697426,16.5998328 42.4143027,16.0821803 C42.9532914,15.6931198 42.4169651,14.9132636 42.4169651,14.9132636"
                    id="Fill-3"
                    fill={secondary}
                  />
                  <path
                    d="M37.0887651,12.0920353 C37.0887651,9.6760941 35.0962232,9.33568291 33.7411943,10.1020724 C33.7401529,10.1029393 33.7389278,10.1056016 33.7382539,10.1063446 C33.6363205,9.81249385 33.362313,9.6 33.0365425,9.6 C32.6248269,9.6 32.2909091,9.93768691 32.2909091,10.3541303 L32.2909091,15.3913243 C32.2909091,15.8078915 32.6248269,16.1454545 33.0365425,16.1454545 C33.4485644,16.1454545 33.7826048,15.8078915 33.7826048,15.3913243 L33.7723134,11.9929705 C33.7723134,11.9929705 33.9532086,11.7752139 34.2436332,11.5669922 C34.9412403,11.0671487 35.6063806,11.2374162 35.6063806,12.0917257 L35.6234716,15.4035835 C35.6234716,15.8135877 35.9518762,16.1454545 36.3573435,16.1454545 C36.7625045,16.1454545 37.0909091,15.8135877 37.0909091,15.4035835 L37.0887651,12.0920353 Z"
                    id="Fill-5"
                    fill={secondary}
                  />
                  <path
                    d="M15.5613016,16.2862697 C15.7330634,15.9971851 15.762994,15.7935853 15.762994,15.7935853 L14.0695172,11.3349218 C14.0695172,11.3349218 13.7622674,10.4721348 14.4393994,10.2166114 C15.1567468,9.94557914 15.4157136,10.6357839 15.4696009,10.7805123 C15.5234881,10.9252407 16.5395249,13.6504516 16.5395249,13.6504516 L17.5177483,10.7867779 C17.5177483,10.7867779 17.7979621,9.89638514 18.5815138,10.2138818 C19.2290232,10.4764773 18.8964002,11.3498103 18.8964002,11.3498103 C18.8964002,11.3498103 17.8952671,14.3335844 17.0561037,16.4983684 C16.5548597,17.7916804 16.1267792,17.9191009 15.6376676,18.0403799 C14.9830758,18.2027884 13.7454545,18.1223286 13.7454545,17.30247 C13.7454545,16.655814 14.4027561,16.615491 14.6992284,16.6251065 C14.7151175,16.6254167 15.3279543,16.6788911 15.5613016,16.2862697"
                    id="Fill-7"
                    fill={primary}
                  />
                  <path
                    d="M11.5669215,8.85710249 L10.0137262,13.1590392 L8.3203761,8.88327934 C8.3203761,8.88327934 8.06948196,8.07272727 7.36345596,8.07272727 C6.54545455,8.07272727 6.57202708,8.72317872 6.55361169,8.88327934 C6.53525811,9.04350403 6.55361169,15.569481 6.55361169,15.569481 C6.55361169,15.569481 6.54545455,16.2545455 7.29591229,16.2545455 C8.06280792,16.2545455 8.02603896,15.56334 8.03209502,15.56334 C8.03821288,15.56334 8.03209502,12.1182301 8.03209502,12.1182301 L9.27754342,15.56334 C9.27754342,15.56334 9.46151186,16.2407127 10.0381976,16.2283686 C10.6148833,16.2161486 10.7804982,15.56334 10.7804982,15.56334 L11.823501,12.1244331 L11.823501,15.56334 C11.823501,15.56334 11.823501,16.2545455 12.5780991,16.2545455 C13.3081022,16.2545455 13.3081022,15.56334 13.3081022,15.56334 L13.3090909,8.88948239 C13.3090909,8.88948239 13.3090909,8.07272727 12.5166733,8.07663519 C11.8595284,8.07973672 11.609932,8.71207526 11.5669215,8.85710249 C11.5619778,8.8740368 11.5596913,8.88327934 11.5596913,8.88327934"
                    id="Fill-9"
                    fill={primary}
                  />
                  <g id="Group-13">
                    <mask id="mask-2" fill="white">
                      <polygon
                        points="3.086436e-05 0.00960615385 42.6159033 0.00960615385 42.6159033 24 3.086436e-05 24"
                        transform="matrix(1, 0, 0, 1, 0, 0)"
                      />
                    </mask>
                    <g id="Clip-12" />
                    <path
                      d="M42.6159341,18.6971754 L29.5208652,18.6971754 L19.9057529,18.6956369 L19.9124196,18.7062215 C18.0119775,20.9263446 15.1892466,22.3382831 12.0318843,22.3382831 C6.30740974,22.3382831 1.66682976,17.7116369 1.66682976,12.0048677 C1.66682976,6.29803692 6.30740974,1.67182154 12.0318843,1.67182154 C15.2027652,1.67182154 18.0390147,3.09182154 19.9398272,5.32819077 L22.0210727,5.32819077 C19.8613082,2.12277538 16.1963507,0.00960615385 12.0318843,0.00960615385 C5.38703452,0.00960615385 3.086436e-05,5.38012923 3.086436e-05,12.0048677 C3.086436e-05,18.6296062 5.38703452,24.0000062 12.0318843,24.0000062 C15.5178286,24.0000062 18.6504994,22.5164985 20.846622,20.1542215 L41.6296327,20.1336062 L42.6159341,18.6971754 Z"
                      id="Fill-11"
                      fill={primary}
                      mask="url(#mask-2)"
                    />
                  </g>
                  <path
                    d="M23.5642714,14.6942333 L21.476941,14.6942333 L21.476941,12.703212 L23.5642714,12.703212 C24.0691167,12.729228 24.5593003,12.986305 24.5593003,13.698846 C24.5593003,14.4306215 24.1135333,14.6942333 23.5642714,14.6942333 Z M21.476941,9.5856756 L23.4225205,9.5856756 C23.8122278,9.59572442 24.2213404,9.80372869 24.2213404,10.3852036 C24.2213404,10.9910915 23.8636056,11.1846082 23.4225205,11.1846082 L21.476941,11.1846082 L21.476941,9.5856756 Z M25.2086687,11.7878453 C25.2484033,11.7332241 25.7477042,11.3284357 25.7082776,10.252103 C25.6287468,8.0729285 23.7375637,8.09777311 23.3189641,8.08507338 C22.644646,8.06479081 22.2387368,8.0729285 21.0010496,8.08507338 C19.9559983,8.09543044 19.9636372,9.0459372 19.9636372,9.0459372 L19.9636364,16.1454545 L23.4862807,16.1454545 C25.3714882,16.1454545 26.0727273,15.1069128 26.0727273,13.6549518 C26.0727273,12.1940516 25.2086687,11.7878453 25.2086687,11.7878453 Z"
                    id="Fill-14"
                    fill={secondary}
                  />
                </g>
              </g>
            </g>
          </svg>
        );
      }}
    />
  );
}
