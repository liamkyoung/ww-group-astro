const consultingHero = new Proxy({"src":"/_astro/consulting-service-hero.DvOEqkxD.webp","width":3840,"height":2560,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/services/consulting-service-hero.webp";
							}
							
							return target[name];
						}
					});

export { consultingHero as c };
