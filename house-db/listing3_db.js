/*
 * @Author: archiecheng archiechengice@outlook.com
 * @Date: 2024-07-29 15:47:29
 * @LastEditors: archiecheng archiechengice@outlook.com
 * @LastEditTime: 2024-07-29 16:57:06
 * @FilePath: \rentalweb\house-db\listing2_db.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
house_db = {
	'title' : 'Comfy 6B3B @ Heart Moreno Valley',
	'bk_image' : 'img/listing3/background.png',
	'coupon_image' : 'img/star-jasmine/p3.png',
	'decorate_image' : 'img/star-jasmine/p2.png',
	'contact' : '+562 846 2887',
	'link_a' : 'www.airbnb.com/rooms/',
	'link_b' : '1159647163276259319',
	'location' : 'Murrieta, California, United States',
	'des' : 'Wake up to the melodious symphony of birdsong and start your day with a cup of coffee on the patio, watching the mist-laden sunrise paint the sky in vibrant hues. As the day unfolds, soak in the lavish greenery that envelops the property. In the evening, witness the mesmerizing sunset over CA Oak trees, casting a golden glow on the horizon...Located in the esteemed La Cresta, 3-bedroom, 2-bathroom, newly built retreat promises an unforgettable getaway where luxury and serenity harmoniously blend.',
	'activeImg' : 'img/listing3/background.png',
	'images' : ['img/listing3/p2.png', 
		'img/listing3/p3.png', 
		'img/listing3/p4.png', 
		'img/listing3/p6.png', 
		'img/listing3/p7.png', 
		'img/listing3/p8.png',
		'img/listing3/p9.png', 
		'img/listing3/p10.png',
	],
	'host' : {
		'name' : 'Sijun',
		'location' : "Los Angels",
		'listings' : '26',
		'followers' : '326',
		'following' : '12',
		'pro_image' : 'img/star-jasmine/pro1.png'
	},
	
	'rooms' : [
		{
			'name' : 'Standard Single Room',
			'load' : '2 Persons',
			'price' : '$80',
			'img' : 'img/listing3/b1.png'
		},
		{
			'name' : 'Deluxe Room',
			'load' : '3 Persons',
			'price' : '$150',
			'img' : 'img/listing3/b2.png'
		},
		{
			'name' : 'Signature Room',
			'load' : '4 Persons',
			'price' : '$110',
			'img' : 'img/listing3/b3.png'
		}],
		'reviews' : [
		{
			'proImg' : 'img/star-jasmine/pro1.png',
			'proName' : 'Naomi',
			'reviewNum' : '5 Reviews',
			'title' : 'Best hotel in the Area',
			'date' : 'Posted 12/05/2023',
			'score' : '5.0',
			'des' : 'MY stay was the best,Sijun was very helpful during our stay ,the location was absolutely perfect 👌.',
			'review_img' : ["img/star-jasmine/bath1.png", "img/star-jasmine/bath2.png", "img/star-jasmine/bath3.png"],
		}],
		'recommends' : [
			{
				'img' : 'img/star-jasmine/o2.png',
				'name' : 'BestHyatt',
				'price' : '$89',
				'location': '31st North St, Sydney, Australia'
			},
			{
				'img' : 'img/star-jasmine/o1.png',
				'name' : 'Hilton Moorea',
				'price' : '$119',
				'location': '31st North St, Sydney, Australia'
			},
			{
				'img' : 'img/star-jasmine/o1.png',
				'name' : 'Lagoon Resort',
				'price' : '$139',
				'location': '31st North St, Sydney, Australia'
			},
			{
				'img' : 'img/star-jasmine/o2.png',
				'name' : 'The Westin Excelsior',
				'price' : '$159',
				'location': '31st North St, Sydney, Australia'
			}
		]
}