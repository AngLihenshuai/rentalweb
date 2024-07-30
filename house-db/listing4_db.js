/*
 * @Author: archiecheng archiechengice@outlook.com
 * @Date: 2024-07-29 15:47:29
 * @LastEditors: archiecheng archiechengice@outlook.com
 * @LastEditTime: 2024-07-29 17:07:30
 * @FilePath: \rentalweb\house-db\listing2_db.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
house_db = {
	'title' : 'Cottage@Vineyard near Temecula',
	'bk_image' : 'img/listing4/background.png',
	'coupon_image' : 'img/star-jasmine/p3.png',
	'decorate_image' : 'img/star-jasmine/p2.png',
	'contact' : '+562 846 2887',
	'link_a' : 'www.airbnb.com/rooms/',
	'link_b' : '1159647163276259319',
	'location' : 'Murrieta, California, United States',
	'des' : 'Wake up to the melodious symphony of birdsong and start your day with a cup of coffee on the patio, watching the mist-laden sunrise paint the sky in vibrant hues. As the day unfolds, soak in the lavish greenery that envelops the property. In the evening, witness the mesmerizing sunset over the vineyard, casting a golden glow on the horizon …Located in the esteemed La Cresta, 1550 sqft, 2-bedroom, 2-bathroom retreat promises an unforgettable getaway where luxury and serenity harmoniously blend.',
	'activeImg' : 'img/listing4/background.png',
	'images' : ['img/listing4/p2.png', 
		'img/listing4/p3.png', 
		'img/listing4/p4.png', 
		'img/listing4/p6.png', 
		'img/listing4/p7.png', 
		'img/listing4/p8.png',
		'img/listing4/p9.png', 
		'img/listing4/p10.png',
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
			'img' : 'img/listing4/b1.png'
		},
		{
			'name' : 'Deluxe Room',
			'load' : '3 Persons',
			'price' : '$150',
			'img' : 'img/listing4/b2.png'
		},
		{
			'name' : 'Signature Room',
			'load' : '4 Persons',
			'price' : '$110',
			'img' : 'img/listing4/b3.png'
		}],
		'reviews' : [],
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