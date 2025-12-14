import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_pS31TPf1.mjs';
import 'piccolore';
import { $ as $$Default } from '../chunks/Default_CqVhy9UU.mjs';
import { $ as $$CTA } from '../chunks/CTA_BhA7SPkh.mjs';
import { $ as $$FullscreenHero, t as teamImg } from '../chunks/team-portrait-img_cksuIpsB.mjs';
import 'clsx';
import { $ as $$ProjectBlock } from '../chunks/ProjectBlock_DbDWaGLt.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useEffect } from 'react';
/* empty css                                 */
import { d as createSvgComponent, S as ServiceLinks } from '../chunks/index_CDtGpoOw.mjs';
import { s as sanityClient } from '../chunks/sanityClient_DxVeBFpp.mjs';
import { G as GET_HOME_PAGE_PROJECTS } from '../chunks/projects_Ty29-49X.mjs';
import { $ as $$ProjectGallery } from '../chunks/ProjectGallery_D-yIoVWw.mjs';
import { g as getAllListingPreviews } from '../chunks/propertyTypeFormatter_BQ5xwLpq.mjs';
import { L as ListingGallery } from '../chunks/ListingGallery_BYxDC34f.mjs';
import { l as leasingHero } from '../chunks/leasing-service-hero_Dg9MAURS.mjs';
import { c as consultingHero } from '../chunks/consulting-service-hero_B7jpmmLJ.mjs';
import { a as acquisitionHero } from '../chunks/acquisition-service-hero_uwGTgfhE.mjs';
import { s as salesHero } from '../chunks/sales-service-hero_m3zKAhuB.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://ww-group-astro.vercel.app");
const $$Stat = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Stat;
  const { bgColor = "bg-wwRed", title, descriptor } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${bgColor} p-6 sm:p-16 min-w-64 xl:min-w-64 2xl:min-w-64 flex items-center justify-center h-64`, "class")}> <div class="flex items-center gap-4 mr-auto sm:block sm:items-start"> <h2 class="text-white">${title}</h2> <p class="text-lg text-white">${descriptor}</p> </div> </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Stat.astro", void 0);

const BGImage = new Proxy({"src":"/_astro/bg_backdrop.DGBu0GK-.png","width":1440,"height":956,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/images/bg_backdrop.png";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://ww-group-astro.vercel.app");
const $$StatBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$StatBlock;
  const { title, description, facts = [], bgImageUrl, id } = Astro2.props;
  const bgColors = ["bg-wwRed", "bg-wwBlack", "bg-wwLogoPink", "bg-wwLogoRed"];
  return renderTemplate`${maybeRenderHead()}<div class="relative"${addAttribute(id, "id")}> <div class="absolute z-10 w-full xl:h-auto mt-16"> <div class="global-margin-x py-0 lg:py-16"> <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-16"> <h2 class="flex-1">${title}</h2> ${description && renderTemplate`<p class="text-center xl:text-right max-w-3xl">${description}</p>`} </div> <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4 global-space-x global-space-y"> ${facts.map((f, i) => {
    const bgIndex = i % bgColors.length;
    const bgColor = bgColors[bgIndex];
    return renderTemplate`<div class="transition-transform duration-300 ease-out opacity-100 md:hover:-translate-y-1"> ${renderComponent($$result, "Stat", $$Stat, { "bgColor": bgColor, "title": f.factStat, "descriptor": f.factDescription })} </div>`;
  })} </div> </div> </div>  ${bgImageUrl ? renderTemplate`<img${addAttribute(bgImageUrl, "src")} alt="stats-bg" class="w-full min-h-[48rem] xl:h-64 opacity-20 object-cover" loading="lazy">` : renderTemplate`<img${addAttribute(BGImage.src, "src")} alt="stats-bg" class="w-full min-h-[48rem] xl:h-64 opacity-20 object-cover" loading="lazy">`} </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Blocks/StatBlock.astro", void 0);

const christUMCLogo = new Proxy({"src":"/_astro/christ-umc-logo.CQlHID6o.png","width":236,"height":92,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/christ-umc-logo.png";
							}
							
							return target[name];
						}
					});

const cityStPeteLogo = new Proxy({"src":"/_astro/city-st-petersburg-logo.CvMND9le.png","width":900,"height":900,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/city-st-petersburg-logo.png";
							}
							
							return target[name];
						}
					});

const clearPHLogo = new Proxy({"src":"/_astro/clear-ph-logo.CdhBAH5f.png","width":480,"height":221,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/clear-ph-logo.png";
							}
							
							return target[name];
						}
					});

const datzLogo = new Proxy({"src":"/_astro/datz-logo.BSBavo_3.png","width":302,"height":178,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/datz-logo.png";
							}
							
							return target[name];
						}
					});

const evergladesLogo = new Proxy({"src":"/_astro/everglades-university-logo.C3OKHRFx.png","width":1592,"height":1352,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/everglades-university-logo.png";
							}
							
							return target[name];
						}
					});

const feldmansLogo = new Proxy({"src":"/_astro/feldmans-equities-logo.UoixcAEa.png","width":1024,"height":147,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/feldmans-equities-logo.png";
							}
							
							return target[name];
						}
					});

const fulmerLeroyLogo = new Proxy({"src":"/_astro/Fulmer-LeRoy-Albee-logo.B9wtKVwv.webp","width":1020,"height":120,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/Fulmer-LeRoy-Albee-logo.webp";
							}
							
							return target[name];
						}
					});

const goodIntentionsLogo = new Proxy({"src":"/_astro/good-intentions-logo.CXy6yTSU.png","width":400,"height":80,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/good-intentions-logo.png";
							}
							
							return target[name];
						}
					});

const hpCapitalLogo = new Proxy({"src":"/_astro/hp-capital-group-logo.jkwa2WTD.png","width":1500,"height":844,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/hp-capital-group-logo.png";
							}
							
							return target[name];
						}
					});

const intermezzoLogo = new Proxy({"src":"/_astro/intermezzo-logo.CrR184cg.png","width":5264,"height":1526,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/intermezzo-logo.png";
							}
							
							return target[name];
						}
					});

const keiserLogo = new Proxy({"src":"/_astro/keiser-university-logo.B4KYyu7r.png","width":800,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/keiser-university-logo.png";
							}
							
							return target[name];
						}
					});

const kwStPeteLogo = new Proxy({"src":"/_astro/kw-st-pete-logo.BiNEWz6_.png","width":698,"height":218,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/kw-st-pete-logo.png";
							}
							
							return target[name];
						}
					});

const lidsLogo = createSvgComponent({"meta":{"src":"/_astro/lids-logo.S4Lh_vcS.svg","width":614,"height":239,"format":"svg"},"attributes":{"style":"isolation:isolate","viewBox":"0 0 614.382 239.398","width":"614.382","height":"239.398"},"children":"<defs><clipPath id=\"_clipPath_NYQiby7yL4KQYUsvbTMpaFUTrWCh6dDG\"><rect width=\"614.382\" height=\"239.398\" /></clipPath></defs><g clip-path=\"url(#_clipPath_NYQiby7yL4KQYUsvbTMpaFUTrWCh6dDG)\"><clipPath id=\"_clipPath_CCZwOADDxvvjjx6tGCMYvlAhWMeFolEm\"><path d=\" M 0 0 L 0 239.398 L 614.382 239.398 L 614.382 0 L 0 0 Z \" fill=\"rgb(255,255,255)\" /></clipPath><g clip-path=\"url(#_clipPath_CCZwOADDxvvjjx6tGCMYvlAhWMeFolEm)\"><path d=\" M 45.731 6.044 C 59.745 6.123 73.768 6.044 87.781 6.094 C 91.871 6.28 96.146 7.937 97.637 12.075 C 97.627 13.32 97.587 14.566 97.519 15.811 C 86.3 68.256 75.19 120.74 63.971 173.204 C 62.491 180.108 61.137 187.031 59.568 193.924 C 78.495 194.493 97.45 193.973 116.396 194.18 C 117.916 188.57 118.769 182.813 120.279 177.205 C 132.312 177.253 144.355 176.96 156.387 177.381 C 159.416 177.244 161.907 179.245 163.28 181.785 C 163.252 184.217 163.447 186.668 163.035 189.07 C 160.319 202.299 157.426 215.498 154.68 228.718 C 153.445 235.053 147.139 239.956 140.686 239.348 C 99.167 239.27 57.636 239.309 16.106 239.327 C 9.86 239.23 3.201 236.21 0.867 230.041 C -1.594 221.697 1.819 213.283 3.26 205.075 C 15.979 144.883 28.806 84.721 41.544 24.529 C 42.927 18.361 43.897 12.095 45.731 6.044 L 45.731 6.044 Z \" fill=\"rgb(57,71,137)\" /></g><clipPath id=\"_clipPath_SshKbtjmViROBYsLZ9clvdR5SIcsN73J\"><path d=\" M 0 0 L 0 239.398 L 614.382 239.398 L 614.382 0 L 0 0 Z \" fill=\"rgb(255,255,255)\" /></clipPath><g clip-path=\"url(#_clipPath_SshKbtjmViROBYsLZ9clvdR5SIcsN73J)\"><path d=\" M 182.935 62.166 C 201.802 62.127 220.853 62.157 239.721 62.146 C 242.28 62.107 244.811 62.49 247.35 62.803 C 250.753 64.284 252.351 67.687 252.175 71.296 C 243.419 113.08 234.415 154.807 225.728 196.602 C 223.257 207.683 221.138 218.843 218.46 229.875 C 217.48 234.739 213.186 238.347 208.478 239.289 C 196.69 239.357 184.903 239.25 173.116 239.338 C 170.086 239.583 166.801 238.083 165.428 235.277 C 163.849 230.601 165.761 225.805 166.555 221.176 C 172.067 195.023 177.716 168.909 183.177 142.745 C 184.933 134.567 186.728 126.398 188.473 118.22 C 189.18 114.768 189.698 111.257 190.807 107.894 C 186.247 107.884 181.285 108.58 177.284 105.854 C 174.822 103.705 174.646 100.098 175.254 97.107 C 177.489 86.329 179.745 76.372 182.157 64.814 C 182.35 63.891 182.582 63.029 182.935 62.166 L 182.935 62.166 Z \" fill=\"rgb(57,71,137)\" /></g><clipPath id=\"_clipPath_3UskUDmmxnl0XVfB4VerpfwOppbqp0Nn\"><path d=\" M 0 0 L 0 239.398 L 614.382 239.398 L 614.382 0 L 0 0 Z \" fill=\"rgb(255,255,255)\" /></clipPath><g clip-path=\"url(#_clipPath_3UskUDmmxnl0XVfB4VerpfwOppbqp0Nn)\"><path d=\" M 213.587 0.043 C 227.855 0.023 242.114 0.053 256.382 0.013 C 258.353 -0.055 260.226 0.631 262.118 1.102 C 266.169 3.838 265.63 8.986 264.874 13.193 C 263.089 20.744 261.716 28.383 259.902 35.924 C 258.931 40.043 255.754 43.142 252.106 45.035 C 242.859 46.917 233.386 45.77 224.021 46.084 C 218.089 45.986 210.821 47.005 206.507 41.946 C 205.496 40.76 205.399 38.88 205.712 37.356 C 208.294 24.791 210.91 12.468 213.587 0.043 L 213.587 0.043 Z \" fill=\"rgb(57,71,137)\" /></g><clipPath id=\"_clipPath_uV99lRZO43kTThoreT0dkbd10Tlqn7X4\"><path d=\" M 0 0 L 0 239.398 L 614.382 239.398 L 614.382 0 L 0 0 Z \" fill=\"rgb(255,255,255)\" /></clipPath><g clip-path=\"url(#_clipPath_uV99lRZO43kTThoreT0dkbd10Tlqn7X4)\"><path d=\" M 359.095 134.037 C 354.936 154.101 350.523 174.115 346.386 194.18 C 337.324 194.141 328.262 194.15 319.201 194.18 C 314.563 194.239 309.925 193.149 305.786 191.081 C 298.304 186.412 296.559 176.969 297.421 168.811 C 297.529 160.749 300.02 153.013 301.579 145.168 C 303.649 135.116 306.022 124.828 311.621 116.062 C 315.976 108.982 323.614 103.971 331.891 103.009 C 336.295 102.745 340.708 102.873 345.111 103.138 C 346.14 103.549 347.2 103.902 348.268 104.216 C 353.162 106.157 357.397 110.237 358.692 115.445 C 360.388 121.485 359.653 127.879 359.095 134.037 Z  M 439.536 10.634 C 439.967 8.673 440.076 6.525 439.025 4.73 C 437.83 1.014 433.387 0.386 430.043 0.092 C 416.275 -0.026 387.95 0.003 386.934 0.003 C 386.67 4.348 378.883 41.533 375.941 54.978 C 375.362 57.008 375.059 59.597 372.96 60.656 C 369.136 61.882 365.36 59.94 361.898 58.499 C 357.77 56.586 353.131 56.586 348.699 56.116 C 336.53 56.518 324.301 58.008 312.75 62.029 C 301.463 66.158 290.882 72.247 281.888 80.239 C 269.082 91.458 259.844 106.285 253.695 122.064 C 249.754 132.968 247.674 144.402 245.31 155.718 C 242.349 169.859 242.055 184.629 245.831 198.652 C 248.478 207.507 253.195 215.685 259.579 222.373 C 269.817 231.944 283.487 237.445 297.363 238.652 C 302.266 239.829 307.327 239.152 312.308 239.309 C 342.904 239.309 373.51 239.309 404.116 239.309 C 409.237 239.309 412.49 234.317 413.588 229.542 C 415.569 221.324 417.204 213.505 418.971 204.771 C 419.488 202.215 419.616 199.695 418.178 197.338 C 417 195.609 415.776 194.268 413.333 194.268 C 408.951 194.268 404.713 194.218 400.408 194.13 C 403.556 179.647 406.713 165.153 409.724 150.63 C 419.678 103.971 429.67 57.312 439.536 10.634 Z \" fill=\"rgb(57,71,137)\" /></g><clipPath id=\"_clipPath_lmfmaELTq3JUUVoF7QiiRbdGPyWfDNIG\"><path d=\" M 0 0 L 0 239.398 L 614.382 239.398 L 614.382 0 L 0 0 Z \" fill=\"rgb(255,255,255)\" /></clipPath><g clip-path=\"url(#_clipPath_lmfmaELTq3JUUVoF7QiiRbdGPyWfDNIG)\"><path d=\" M 485.4 63.029 C 507.641 55.606 531.382 55.9 554.554 56.155 C 560.449 56.743 566.411 56.116 572.284 56.969 C 574.638 57.332 576.491 59.263 577.619 61.254 C 578.502 63.755 578.168 66.54 577.55 69.07 C 575.736 76.631 574.412 84.309 572.48 91.84 C 572.383 92.331 572.196 93.301 572.099 93.792 C 569.911 98.215 565.637 102.059 560.468 102.01 C 546.387 102.02 532.304 101.971 518.242 102.353 C 511.584 103.039 504.62 102.716 498.481 105.815 C 494.186 108.266 491.794 113.454 492.903 118.308 C 493.726 121.201 496.708 122.201 499.129 123.388 C 505.445 124.849 511.877 125.73 518.36 125.643 C 523.469 126.938 528.784 126.093 533.902 127.241 C 540.433 128.085 546.827 129.674 553.103 131.645 C 554.741 132.321 556.409 132.958 558.065 133.626 C 560.713 134.959 563.36 136.322 565.842 137.97 C 571.971 142.284 577.374 148.09 579.874 155.277 C 583.935 167.134 582.051 180.059 578.403 191.767 C 577.923 193.415 577.393 195.053 576.883 196.69 C 572.755 205.731 567.843 214.793 559.959 221.118 C 554.516 225.943 548.073 229.463 541.384 232.229 C 529.244 236.681 516.388 238.554 503.572 239.338 C 478.702 239.26 453.833 239.318 428.955 239.318 C 424.815 239.318 424.029 238.655 422.258 236.161 C 421.329 234.855 420.269 233.916 421.335 229.453 C 426.312 208.61 428.586 195.16 432.152 178.509 C 432.496 176.898 434.366 176.676 435.809 176.676 C 445.646 176.676 455.5 176.744 465.346 176.744 C 469.546 176.744 470.905 177.145 471.858 177.577 C 473.619 178.376 475.094 179.911 475.691 181.853 C 477.035 185.894 474.995 189.973 474.918 194.043 C 487.704 193.994 500.521 194.513 513.279 193.288 C 519.262 193.405 525.519 190.65 528.009 184.902 C 528.088 182.579 528.097 180.265 528.049 177.941 C 525.694 173.645 521.026 171.723 516.762 169.909 C 507.219 167.811 497.373 167.967 487.783 166.064 C 481.007 164.956 474.31 163.309 467.779 161.181 C 458.677 157.906 449.322 153.179 443.978 144.774 C 440.124 139.166 438.762 132.164 438.801 125.476 C 439.625 117.964 441.507 110.6 443.959 103.46 C 449.44 88.467 460.1 75.15 474.505 67.923 C 474.985 67.677 475.947 67.197 476.417 66.952 C 479.369 65.539 482.361 64.245 485.4 63.029 L 485.4 63.029 Z \" fill=\"rgb(57,71,137)\" /></g><clipPath id=\"_clipPath_t94GymCfevLcl0ALaax5C2c6enQeiUHx\"><path d=\" M 0 0 L 0 239.398 L 614.382 239.398 L 614.382 0 L 0 0 Z \" fill=\"rgb(255,255,255)\" /></clipPath><g clip-path=\"url(#_clipPath_t94GymCfevLcl0ALaax5C2c6enQeiUHx)\"><path d=\" M 610.781 55.001 C 610.338 58.884 609.972 62.953 607.225 65.866 C 603.282 70.49 596.004 72.154 590.616 69.157 C 587.961 67.674 586.531 64.552 586.835 61.433 C 587.167 58.007 588.131 53.765 589.437 51.994 C 591.789 48.802 594.658 47.106 599.047 46.452 C 603.622 45.77 611.473 48.947 610.781 55.001 Z  M 599.116 42.881 C 593.429 43.729 589.71 45.927 586.661 50.064 C 584.971 52.359 583.719 57.857 583.289 62.297 C 582.896 66.341 584.75 70.387 588.192 72.31 C 595.174 76.193 604.608 74.036 609.717 68.043 C 613.277 64.268 613.751 58.994 614.326 53.962 C 615.222 46.114 605.048 41.996 599.116 42.881 Z \" fill=\"rgb(57,71,137)\" /></g><clipPath id=\"_clipPath_k7J6dB0aE7rR7p8gRkOBTUKdVFErmFu7\"><path d=\" M 0 0 L 0 239.398 L 614.382 239.398 L 614.382 0 L 0 0 Z \" fill=\"rgb(255,255,255)\" /></clipPath><g clip-path=\"url(#_clipPath_k7J6dB0aE7rR7p8gRkOBTUKdVFErmFu7)\"><path d=\" M 596.853 57.321 C 597.869 57.321 598.374 57.321 599.391 57.321 C 599.884 57.335 600.37 57.24 600.835 57.065 C 601.315 56.884 601.628 56.469 601.72 55.828 C 601.789 55.35 601.67 54.961 601.383 54.727 C 601.07 54.473 600.433 54.349 599.523 54.349 C 598.617 54.349 598.162 54.35 597.255 54.35 C 597.088 55.538 597.009 56.131 596.853 57.321 Z  M 593.304 50.794 C 596.792 50.794 598.537 50.794 602.026 50.794 C 603.368 50.794 604.467 51.149 605.312 51.858 C 606.156 52.567 606.523 53.656 606.354 55.064 C 606.258 55.847 605.98 56.624 605.527 57.3 C 605.074 57.976 603.581 58.803 603.581 58.803 C 603.579 58.907 605.322 60.652 605.303 62.558 C 605.301 62.732 605.289 62.976 605.271 63.252 C 605.252 63.526 605.235 63.845 605.21 64.165 C 605.159 64.837 605.223 65.402 605.362 65.814 C 603.569 65.814 602.671 65.814 600.878 65.814 C 600.774 65.038 600.751 64.252 600.814 63.465 C 600.843 63.092 600.85 62.719 600.833 62.354 C 600.818 62.019 600.756 61.705 600.654 61.424 C 600.552 61.147 600.375 60.916 600.119 60.755 C 599.864 60.596 599.492 60.517 599.015 60.517 C 597.988 60.517 597.475 60.517 596.448 60.517 C 596.19 62.618 596.068 63.673 595.822 65.814 C 594.03 65.814 593.135 65.814 591.343 65.814 C 592.001 59.689 592.246 56.781 593.304 50.794 Z \" fill=\"rgb(57,71,137)\" /></g></g>"});

const paradecoLogo = new Proxy({"src":"/_astro/paradeco-logo.Cen5cNS1.webp","width":751,"height":226,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/paradeco-logo.webp";
							}
							
							return target[name];
						}
					});

const pmgLogo = new Proxy({"src":"/_astro/pmg-logo.YU9fKIb9.png","width":695,"height":247,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/pmg-logo.png";
							}
							
							return target[name];
						}
					});

const pureGreenLogo = new Proxy({"src":"/_astro/puregreen-logo.DCAVBd_2.png","width":1000,"height":182,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/puregreen-logo.png";
							}
							
							return target[name];
						}
					});

const relatedLogo = new Proxy({"src":"/_astro/related-logo.CWgntQlv.png","width":806,"height":234,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/related-logo.png";
							}
							
							return target[name];
						}
					});

const skywardLivingLogo = new Proxy({"src":"/_astro/skyward-living-logo.BNxpEsAZ.png","width":1280,"height":627,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/skyward-living-logo.png";
							}
							
							return target[name];
						}
					});

const stPeteAthleticLogo = new Proxy({"src":"/_astro/st-pete-athletic.D4njeU6a.png","width":1027,"height":928,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/st-pete-athletic.png";
							}
							
							return target[name];
						}
					});

const bankOfTampaLogo = new Proxy({"src":"/_astro/the-bank-of-tampa.9SEeYB63.png","width":2100,"height":1500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/the-bank-of-tampa.png";
							}
							
							return target[name];
						}
					});

const denunzioLogo = new Proxy({"src":"/_astro/the-denunzio-group-logo.DzZPVFDf.png","width":200,"height":200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/the-denunzio-group-logo.png";
							}
							
							return target[name];
						}
					});

const floridianLogo = new Proxy({"src":"/_astro/the-floridian-logo.DnNbGIhW.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/the-floridian-logo.png";
							}
							
							return target[name];
						}
					});

const waterviewLogo = new Proxy({"src":"/_astro/waterview-marinas-logo.CSdhfrIx.png","width":1654,"height":350,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/waterview-marinas-logo.png";
							}
							
							return target[name];
						}
					});

const belpointeLogo = new Proxy({"src":"/_astro/belpointe-logo.BQHWeBIw.png","width":673,"height":200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/logos/belpointe-logo.png";
							}
							
							return target[name];
						}
					});

const LOGOS = [
  { src: christUMCLogo, alt: "Christ United Methodist Church logo" },
  { src: cityStPeteLogo, alt: "City of St. Petersburg logo" },
  { src: clearPHLogo, alt: "ClearPH branding agency logo" },
  { src: datzLogo, alt: "Datz Restaurant Group logo" },
  { src: evergladesLogo, alt: "Everglades University logo" },
  { src: feldmansLogo, alt: "Feldman Equities commercial real estate logo" },
  { src: fulmerLeroyLogo, alt: "Fulmer Leroy Albee law firm logo" },
  { src: goodIntentionsLogo, alt: "Good Intentions vegan restaurant logo" },
  { src: hpCapitalLogo, alt: "HP Capital Group real estate logo" },
  { src: intermezzoLogo, alt: "Intermezzo Coffee & Cocktails logo" },
  { src: keiserLogo, alt: "Keiser University logo" },
  { src: kwStPeteLogo, alt: "Keller Williams St. Pete Real Estate logo" },
  { src: lidsLogo, alt: "Lids retail logo" },
  { src: paradecoLogo, alt: "Paradeco Coffee Roasters logo" },
  { src: pmgLogo, alt: "PMG real estate and development logo" },
  { src: pureGreenLogo, alt: "Pure Green juice bar logo" },
  { src: relatedLogo, alt: "Related Group real estate development logo" },
  { src: skywardLivingLogo, alt: "Skyward Living real estate logo" },
  { src: stPeteAthleticLogo, alt: "St. Pete Athletic logo" },
  { src: bankOfTampaLogo, alt: "The Bank of Tampa logo" },
  { src: denunzioLogo, alt: "The Denunzio Group logo" },
  { src: floridianLogo, alt: "The Floridian social club logo" },
  { src: waterviewLogo, alt: "Waterview Marinas logo" },
  { src: belpointeLogo, alt: "Belpointe real estate investment logo" }
];
const CompanyGallery = ({ displayHeader = "no" }) => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (!scrollerInner) return;
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "global-margin-y", children: [
    displayHeader === "yes" && /* @__PURE__ */ jsx("h2", { className: "text-center mb-12", children: "Companies We've Helped" }),
    /* @__PURE__ */ jsx("div", { className: "global-margin-x", children: /* @__PURE__ */ jsx("div", { className: "scroller", "data-direction": "left", "data-speed": "slow", children: /* @__PURE__ */ jsx("div", { className: "scroller__inner", children: LOGOS.map((logo, i) => /* @__PURE__ */ jsx(
      "img",
      {
        src: logo.src,
        alt: logo.alt,
        className: "h-24 w-auto object-contain mx-16",
        loading: "lazy"
      },
      i
    )) }) }) })
  ] });
};

const $$Astro$1 = createAstro("https://ww-group-astro.vercel.app");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { service, className = "" } = Astro2.props;
  const { title, shortDescription, slug, image } = service ?? {};
  const href = slug ? `/services/${slug}` : "#";
  const sanitizedDescription = shortDescription?.replace(/\s/g, " ");
  const imageUrl = image?.imageUrl;
  const imageAlt = image?.alt || title || "Service image";
  const iconType = title?.toLowerCase();
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`w-full h-full block ${className}`, "class")}> <div class="flex gap-2 relative group">  <div class="flex items-center justify-center sm:block w-full h-full lg:h-auto lg:w-64
             border-b-4 border-wwSecondary border-opacity-50 bg-gray-50/75
             absolute top-0 left-0 px-4 lg:px-8 py-4 z-10"> <div> <div class="flex flex-col items-center sm:block sm:items-start max-w-min"> <div class="bg-wwRed p-4 mb-4 rounded-full inline-flex"> ${iconType === "leasing" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 text-gray-50"> <path fill-rule="evenodd" d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" clip-rule="evenodd"></path> </svg>`} ${iconType === "sales" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 text-gray-50"> <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z"></path> <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z"></path> </svg>`} ${iconType === "acquisition" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 text-gray-50"> <path fill-rule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd"></path> </svg>`} ${iconType === "consulting" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 text-gray-50"> <path fill-rule="evenodd" d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.04 16.5.5-1.5h6.42l.5 1.5H8.29Zm7.46-12a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm-3 2.25a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0V9Zm-3 2.25a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z" clip-rule="evenodd"></path> </svg>`} </div> <div class="flex items-center gap-6 mb-2"> <h5 class="font-bold">${title}</h5> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden sm:block size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path> </svg> </div> ${sanitizedDescription && renderTemplate`<p class="hidden sm:block text-sm text-wwBlack"> ${sanitizedDescription} </p>`} </div> </div> </div>  <div class="transition-opacity opacity-0 group-hover:opacity-20
             bg-gray-50 w-full h-full absolute top-0 left-0"></div>  ${imageUrl && renderTemplate`<img${addAttribute(imageUrl, "src")}${addAttribute(imageAlt, "alt")} class="w-full h-full object-cover" loading="lazy">`} </div> </a>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Cards/ServiceCard.astro", void 0);

const $$Astro = createAstro("https://ww-group-astro.vercel.app");
const $$ServiceBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceBlock;
  const { services = [], displayHeader = "yes" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="global-margin-x space-y-24 my-40"> ${displayHeader === "yes" && renderTemplate`<div class="flex md:justify-between justify-center items-center"> <h2 class="md:text-left text-center">Our Services</h2> </div>`} <div class="grid grid-cols-1 sm:grid-cols-2 gap-16 lg:justify-items-start justify-items-center"> ${services.map((service) => renderTemplate`${renderComponent($$result, "ServiceCard", $$ServiceCard, { "service": service })}`)} </div> <div class="md:hidden flex justify-center"> <a class="btn-primary"${addAttribute(ServiceLinks.relLink, "href")}> LEARN MORE </a> </div> </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Blocks/ServiceBlock.astro", void 0);

const backupImg = new Proxy({"src":"/_astro/reflection-eagle-pov.DYZggDzD.webp","width":1439,"height":705,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/images/reflection-eagle-pov.webp";
							}
							
							return target[name];
						}
					});

const services = [
  {
    title: "Leasing",
    slug: "leasing",
    image: {
      imageUrl: leasingHero,
      alt: "Leasing Service"
    }
  },
  {
    title: "Consulting",
    slug: "consulting",
    image: {
      imageUrl: consultingHero,
      alt: "Consulting Service"
    }
  },
  {
    title: "Acquisition",
    slug: "acquisition",
    image: {
      imageUrl: acquisitionHero,
      alt: "Acquisition Service"
    }
  },
  {
    title: "Sales",
    slug: "sales",
    image: {
      imageUrl: salesHero,
      alt: "Sales Service"
    }
  }
];
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const facts = [
    { factStat: "150+", factDescription: "Transactions closed" },
    { factStat: "98%", factDescription: "Client satisfaction rate" },
    { factStat: "12", factDescription: "Years in Tampa Bay" },
    { factStat: "24/7", factDescription: "Support for our clients" }
  ];
  const projects = await sanityClient.fetch(GET_HOME_PAGE_PROJECTS);
  const listings = await getAllListingPreviews();
  return renderTemplate`${renderComponent($$result, "Default", $$Default, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "FullscreenHero", $$FullscreenHero, { "headerText": "WITTNER WOLLMAN GROUP: TRANSFORMING THE FUTURE OF ST. PETE & TAMPA BAY", "bodyText": [
    "Our team of stellar commercial and residential agents have a talent for envisioning the future of our town. Partner with us to make your mark."
  ], "videoUrl": "https://ww-group.nyc3.cdn.digitaloceanspaces.com/website_vid.mp4", "backupImageUrl": backupImg.src, "centeredText": false, "gradient": "black", "links": [
    { href: "/team", label: "MEET THE TEAM", appearance: "primary" },
    {
      href: "/listings",
      label: "VIEW LISTINGS",
      appearance: "secondary"
    }
  ] })} ${renderComponent($$result2, "StatBlock", $$StatBlock, { "id": "stats", "title": "By the Numbers", "facts": facts })} ${renderComponent($$result2, "ProjectBlock", $$ProjectBlock, { "title": "SHAPING THE URBAN LANDSCAPE & COMMUNITY", "description": "Our team has exceptional talent and experience in commercial real estate, development services, and luxury residential real estate.", "imageSrc": teamImg.src, "imageAlt": "team image", "imagePosition": "right", "colorScheme": "red", "links": [{ href: "/team", label: "MEET THE TEAM", appearance: "secondary" }] })} ${renderComponent($$result2, "ServiceGallery", $$ServiceBlock, { "services": services, "displayHeader": "yes" })} ${renderComponent($$result2, "ProjectGallery", $$ProjectGallery, { "projects": projects })} ${renderComponent($$result2, "ListingGallery", ListingGallery, { "listings": listings, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Gallery/ListingGallery", "client:component-export": "ListingGallery" })} ${renderComponent($$result2, "CompanyScroll", CompanyGallery, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Blocks/Company/CompanyScroll", "client:component-export": "default" })} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  services,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
