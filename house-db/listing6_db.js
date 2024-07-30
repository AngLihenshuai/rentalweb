/*
 * @Author: archiecheng archiechengice@outlook.com
 * @Date: 2024-07-29 15:47:29
 * @LastEditors: archiecheng archiechengice@outlook.com
 * @LastEditTime: 2024-07-29 17:22:16
 * @FilePath: \rentalweb\house-db\listing2_db.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
house_db = {
	'title' : 'Exquisite Studio @ heart DTLA',
	'bk_image' : 'img/listing6/background.png',
	'coupon_image' : 'img/star-jasmine/p3.png',
	'decorate_image' : 'img/star-jasmine/p2.png',
	'contact' : '+562 846 2887',
	'link_a' : 'www.airbnb.com/rooms/',
	'link_b' : '1159647163276259319',
	'location' : 'Los Angeles, California, United States',
	'des' : 'Enjoy a stylish experience at Perla on Broadway is the latest high-rise in the booming DTLA. This 17th floor condo features full-size Bosch washer & dryer and Bertazzoni appliances. You can enjoy 5-star amenities including fitness enter, pools, styled lobby with attendant, yoga studio, meeting rooms, private theater. Smart 24/7 live security guard &system & in-building parking.Walk to Grand Central Market, Walt Disney Concert Hall, Little Tokyo, Chinatown, LA Central Library, USC, UCLA, etc.',
	'activeImg' : 'img/listing6/background.png',
	'images' : ['img/listing6/p2.png', 
		'img/listing6/p3.png', 
		'img/listing6/p4.png', 
		'img/listing6/p6.png', 
		'img/listing6/p7.png', 
		'img/listing6/p8.png',
		'img/listing6/p9.png',
		'img/listing6/p10.png',
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
			'img' : 'img/listing6/b1.png'
		},
		{
			'name' : 'Deluxe Room',
			'load' : '3 Persons',
			'price' : '$150',
			'img' : 'img/listing6/b2.png'
		}
		],
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