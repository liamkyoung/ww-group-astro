import { c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_pS31TPf1.mjs';
import 'piccolore';
import 'clsx';
import { C as ContactLink } from './index_BG6C6zDl.mjs';

const AgentImg = new Proxy({"src":"/_astro/amber_cta.ztOL4AbW.png","width":3375,"height":6000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/images/amber_cta.png";
							}
							
							return target[name];
						}
					});

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-wwRed py-16"> <div class="global-margin-x relative"> <div class="relative max-w-7xl mx-auto"> <div class="mx-auto lg:mx-0 md:max-w-none w-full md:w-1/2 xl:w-3/4 space-y-8 text-center lg:text-left"> <h2 class="text-white"> <span class="text-wwYellow">Let&apos;s get in contact!</span> <br> Let us know how we can help you.
</h2> <div> <a class="btn-secondary"${addAttribute(ContactLink.relLink, "href")}>CONTACT US</a> </div> </div> <div class="hidden lg:block absolute -bottom-16 right-0 z-50"> <img${addAttribute(AgentImg.src, "src")} alt="Amber Agent CTA" class="h-128 object-contain max-w-min"> </div> </div> </div> </div>`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/components/CTA.astro", void 0);

export { $$CTA as $ };
