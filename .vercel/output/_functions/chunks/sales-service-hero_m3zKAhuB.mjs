const salesHero = new Proxy({"src":"/_astro/sales-service-hero.CFVURJz0.webp","width":3840,"height":2560,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/services/sales-service-hero.webp";
							}
							
							return target[name];
						}
					});

export { salesHero as s };
