const leasingHero = new Proxy({"src":"/_astro/leasing-service-hero.ZsHVov1m.webp","width":3840,"height":2560,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/services/leasing-service-hero.webp";
							}
							
							return target[name];
						}
					});

export { leasingHero as l };
