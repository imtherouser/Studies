import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const Dark = (): JSX.Element => {
  const themeContext = useContext(ThemeContext);

  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="696.000000pt"
      height="980.000000pt"
      viewBox="0 0 696.000000 980.000000"
      preserveAspectRatio="xMidYMid meet">
      <g
        transform="translate(0.000000,980.000000) scale(0.100000,-0.100000)"
        fill={themeContext.text}
        stroke="none">
        <path
          d="M695 9773 c-173 -171 -468 -1735 -615 -3268 -85 -893 -92 -2318 -20
-4040 54 -1265 149 -2016 295 -2311 64 -130 136 -188 166 -133 6 12 22 157 35
322 45 560 74 798 140 1142 57 295 83 395 103 395 55 0 736 -288 1613 -684
721 -324 942 -400 1113 -381 191 21 340 77 1120 425 877 391 1467 640 1517
640 18 0 30 -46 87 -320 72 -349 109 -648 160 -1293 12 -143 24 -244 31 -253
35 -41 105 15 160 130 114 239 205 779 255 1526 23 349 24 372 35 590 73 1481
78 2936 14 3895 -88 1336 -424 3288 -617 3592 -60 94 -144 57 -206 -90 -60
-140 -87 -339 -131 -962 -47 -668 -77 -1006 -111 -1245 -25 -177 -92 -553
-120 -673 -19 -81 -22 -87 -42 -82 -29 9 -327 137 -487 210 -490 223 -787 279
-1605 301 -482 12 -986 -33 -1311 -117 -192 -50 -323 -100 -667 -256 -324
-146 -340 -151 -357 -110 -11 26 -101 530 -129 727 -31 210 -57 494 -96 1015
-38 510 -69 868 -86 975 -12 78 -62 232 -90 277 -27 44 -76 83 -103 83 -13 0
-36 -12 -51 -27z m450 -5785 c50 -22 284 -140 520 -263 237 -122 571 -295 743
-384 618 -318 684 -367 699 -516 21 -206 -174 -428 -422 -480 -127 -27 -428
-17 -631 21 -492 90 -807 325 -1019 759 -95 193 -133 339 -142 545 -9 201 18
351 64 363 34 10 99 -6 188 -45z m4850 42 c49 -19 59 -63 59 -280 0 -282 -22
-384 -134 -618 -80 -166 -144 -256 -280 -392 -181 -181 -323 -264 -570 -333
-321 -90 -740 -102 -915 -27 -122 52 -225 153 -282 275 -22 49 -27 74 -28 140
0 172 52 219 475 433 162 82 545 278 850 437 586 304 632 327 720 356 66 21
71 22 105 9z"
        />
        <path d="M1267 1134 c-4 -4 -4 -10 -1 -15 6 -10 34 0 34 12 0 10 -24 12 -33 3z" />
      </g>
    </svg>
  );
};
