
const data = [
		{
			action: 'add-product',
			name: 'Badring Flamingo',
			description: 'En lekfull och färgglad badring i form av en flamingo, tillverkad av slitstarkt PVC-material. Med en diameter på 90 cm och en höjd på 70 cm, är den perfekt för sommarens strandutflykter.',
			picture: 'https://img.freepik.com/free-vector/flamingo-swim-tube-toy-swimming-pool-summer-sea-concept_1262-13466.jpg?t=st=1683020465~exp=1683021065~hmac=90cfca784ddef962e5797b73ffd820a9ef3b953cc6bfa26e17d7793c71fe3fdd',
			price: 260,
			shopid: shopId
		},
		{
			action: 'add-product',
			name: 'Badring Anka',
			description: "En charmig badring formad som en gullig liten anka, tillverkad av högkvalitativt vinylmaterial. Med en diameter på 80 cm och en höjd på 60 cm, blir den här badringen en favorit bland barnen.",
			picture: "https://img.freepik.com/premium-vector/duckling-rubber-ring_74689-916.jpg?w=740",
			price: 260,
			shopid: shopId
		},
		{
			action: 'add-product',
			name: 'Badring - Gul',
			description: "En uppblåsbar badring i gul färg, perfekt för avkoppling i poolen eller havet. Tillverkad av PVC-material och mäter cirka 90 cm i diameter.",
			picture: "https://img.freepik.com/premium-photo/swim-ring-was-derived-from-inner-tube-inner-enclosed-inflatable-part-older-vehicle-tires_47469-1052.jpg?w=996",
			price: 240,
			shopid: shopId
		},
		{
			action: 'add-product',
			name: 'Badring - Regnbågsfärgad',
			description: "En uppblåsbar badring i regnbågsfärger, perfekt för avkoppling i poolen eller havet. Tillverkad av PVC-material och mäter ca 90 cam i diameter.",
			picture: "https://cdn3.leksakscity.se/95889-thickbox_default/badring-regnbagsfarger-91-cm-bestway.jpg",
			price: 250,
			shopid: shopId
		},
		{
			action: 'add-product',
			name: 'Uppblåsbar Basketset',
			description: "Ett roligt och uppblåsbart basketset som gör att du kan spela basket i vattnet. Tillverkat av hållbart PVC-material och med en korg som är 120 cm hög.",
			picture: "https://cdn.coolstuff.com/pub_images/original/17253_02.jpg?timestamp=1629464504&extend=copy&method=resize&type=auto&width=750&height=563&quality=mediumHigh" ,
			price: 159,
			shopid: shopId
		},
		{
			action: 'add-product',
			name: '3-pack Undervattens Ringar',
			description: "Dyk djupt med dessa färgglada undervattens ringar, tillverkade av säkert och hållbart plastmaterial. Perfekt för att öva dykfärdigheter. Måttet på ringarna är 25 cm i diameter",
			picture: "https://www.shopping4net.se/Common/PCCs/Products/Grpx/T4Net/Img-TYS01-1-XX_1-large.jpg",
			price: 150,
			shopid: shopId
		},
		{
			action: 'add-product',
			name: 'Hink set',
			description: "Ett klassiskt hinkset för barn, inklusive en hink, spade, och kratta och en båt. Perfekt för att bygga sandslott och gräva skatter vid stranden. Tillverkat i hållbar plast.",
			picture: "https://shop14505.sfstatic.io/upload_dir/shop/vn/ga13843-2.jpg" ,
			price: 129,
			shopid: shopId
		},
		{
			action: 'add-product',
			name: 'Hink och Vattenkanna set',
			description: "Detta 10-delars sandset inkluderar en genomskinlig hink, vattenkanna, spade, kratta och flera sandformar. Tillverkat av slitstark plast och mäter ca 18 cm i höjd.",
			picture: "https://cdn2.leksakscity.se/99018-thickbox_default/sandset-genomskinlig-hink-10-delar.jpg",
			price: 199,
			shopid: shopId
		},
		{
			action: 'add-product',
			name: '3 st spader med en kratta',
			description: "Detta set innehåller tre olika spadar och en kratta, alla tillverkade av tålig plast. Perfekt för grävarbete i trädgården, sandlådan eller vid stranden. Tillverkat av slitstark plast.",
			picture: "https://medieserver.jemogfix.dk/api/v1/products/GetPrimaryProductImage?productGroupNumber=2120&productNumber=9058374&shopLanguage=4&previewSize=700" ,
			price: 169,
			shopid: shopId
		},
		{
			action: 'add-product',
			name: 'Spade och Kratta',
			description: "Detta praktiska set består av en kratta och en spade, båda tillverkade av hållbar plast. Perfekt för användning i trädgården, sandlådan eller vid stranden. Längden är ca 15 cm lång.",
			picture: "https://productimages.biltema.com/v1/image/imagebyfilename/14-7966_xl_1.jpg" ,
			price: 59,
			shopid: shopId
		},
		{
			action: 'add-product',
			name: 'Strandlek set',
			description: "Detta omfattande strandlekset inkluderar en hink, spade, kratta, sandformar och mycket mer. Tillverkat av slitstark plast och tillkommer en bra förvaringspåse för lek-setet.",
			picture: "https://www.jollyroom.se/storage/AF7628CD085E3CF554A8FC094C403ED215BBC3FC5C43740BBCF44A1BA23C66E6/c854ad2e4f5244c09db47d8c1b2f6e7d/1200-809-0-jpg.Jpeg/media/045028e46eb64a629b86b50a2d48fe30/107114562-1346_1.jpeg" ,
			price: 289,
			shopid: shopId
		},
		{
			action: 'add-product',
			name: 'Strandhink med spade och formar',
			description: "Denna strandhink är tillverkad av slitstark plast och kommer med en spade och olika formar för att bygga sandslott. Hinken är 18 cm hög och 16 cm i diameter.",
			picture: "https://festgiganten.se/wp-content/uploads/2021/06/Smarta_och_barbara_strandleksaker.jpg",
			price: 99,
			shopid: shopId
		},
		{
			action: 'add-product',
			name: 'Vattensil med hink',
			description: "Denna hink med sil är perfekt för lek i vattnet. Tillverkad av tålig plast och med en storlek på 17 cm i höjd och 15 cm i diameter. ",
			picture: "https://vikingtoys.se/thumb/1320/1280x0/20-2050-1.jpg",
			price: 79,
			shopid: shopId
		},
		{
			action: 'add-product',
			name: 'Vattensil med bil',
			description: "Denna bilformade hink med sil är en rolig leksak för stranden eller poolen. Tillverkad av tålig plast och med en storlek på 18 cm i höjd och 16 cm i diameter. ",
			picture: "https://vikingtoys.se/thumb/1644/1280x0/20-2060-1.jpg",
			price: 89,
			shopid: shopId
		},
		{
			action: 'add-product',
			name: 'Fiskenät med fiskar',
			description: "Detta fiskenät kommer med fiskar i olika färger och storlekar. Perfekt för att fånga små fiskar i vattnet. Nätet är 25 cm i diameter och handtaget är 22 cm långt.",
			picture: "https://www.kids-world.com/images/417px/CS519.jpg",
			price: 69,
			shopid: shopId
		},
		{
			action: 'add-product',
			name: 'Catch-ball set',
			description: "Catch Ball Set inkluderar två färgglada hållare och en boll. Fånga bollen i hållaren och klicka iväg den till medspelaren som ska försöka fånga den i sin hållare. Spelet är roligt för både vuxna och barn, passar från tre års ålder, och är tillverkat av hållbar plast.",
			picture: "https://static.partyking.org/fit-in/1300x0/products/original/catch-ball-set-74002-1.jpg",
			price: 49,
			shopid: shopId
		},
		{
			action: 'add-product',
			name: 'Bocciaset',
			description: "Denna bocciaset är tillverkad av tålig plast och innehåller sex bollar och en målkula. Bollarna är 7 cm i diameter och setet levereras i en praktisk väska. ",
			picture: "https://productimages.biltema.com/v1/image/imagebyfilename/45-664_xl_1.jpg",
			price: 199,
			shopid: shopId
		},
		{
			action: 'add-product',
			name: 'Kardborrespel',
			description: "Detta färgglada kardborrespel är en rolig aktivitet för stranden eller gräsmattan. Tillverkat av slitstarkt material och med en storlek på 25cm x 25cm. ",
			picture: "https://www.bauhaus.se/media/catalog/product/cache/06447b731d1cbff22138e7150384a1c9/7/5/7551099a.jpg",
			price: 99,
			shopid: shopId
		},
		{
			action: 'add-product',
			name: 'Strand pinpong',
			description: "En rolig strandaktivitet som innehåller 2 racket och 2 tillhörande bollar. Tillverkat av slitstarkt material och med en storlek på 45 x 25 cm. ",
			picture: "https://www.bauhaus.se/media/catalog/product/cache/06447b731d1cbff22138e7150384a1c9/7/5/7551363a.jpg",
			price: 159,
			shopid: shopId
		},
		{
			action: 'add-product',
			name: 'Ringspel',
			description: "Detta ringspel är tillverkat av tålig plast och innehåller fyra ringar och spelplattan och dess pinnar. Perfekt för lek på stranden eller gräsmattan. Ringarna är 14 cm i diameter, spelplattan är 38 x 38 x 15 cm och spelpinnarna är 16 cm i höjd.",
			picture: "https://productimages.biltema.com/v1/image/imagebyfilename/14-7953_xl_1.jpg",
			price: 79,
			shopid: shopId
		},	
]



