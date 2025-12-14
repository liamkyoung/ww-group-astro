import { d as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate } from './astro/server_pS31TPf1.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://ww-group-astro.vercel.app");
const $$CardInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardInfo;
  const { address, additionalInfo, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-2"> ${address && renderTemplate`<div class="inline-flex gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 text-wwRed"> <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd"></path> </svg> <p class="text-sm font-bold">${address}</p> </div>`} ${additionalInfo && additionalInfo.length > 0 && renderTemplate`<div class="inline-flex gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 text-wwRed"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd"></path> </svg> <p class="text-sm font-bold"> ${additionalInfo.map(
    (info, i) => info + (i !== additionalInfo.length - 1 ? ", " : "")
  )} </p> </div>`} ${description && renderTemplate`<p>${description}</p>`} </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/Cards/CardInfo.astro", void 0);

export { $$CardInfo as $ };
