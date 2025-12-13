const HeroImg = new Proxy({"src":"/_astro/Community_Resources_Header.DNXMRYXI.webp","width":801,"height":563,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/assets/hero/Community_Resources_Header.webp";
							}
							
							return target[name];
						}
					});

export { HeroImg as H };
