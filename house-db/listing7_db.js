/*
 * @Author: archiecheng archiechengice@outlook.com
 * @Date: 2024-07-29 15:47:29
 * @LastEditors: archiecheng archiechengice@outlook.com
 * @LastEditTime: 2024-07-29 17:30:49
 * @FilePath: \rentalweb\house-db\listing2_db.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
house_db = {
	'title' : 'Exquisite Studio @ heart of DTLA',
	'bk_image' : 'img/listing7/background.png',
	'coupon_image' : 'img/star-jasmine/p3.png',
	'decorate_image' : 'img/star-jasmine/p2.png',
	'contact' : '+562 846 2887',
	'link_a' : 'www.airbnb.com/rooms/',
	'link_b' : '1159647163276259319',
	'location' : 'Los Angeles, California, United States',
	'des' : 'Enjoy a stylish experience at Perla on Broadway is the latest high-rise in the booming DTLA. This 17th floor condo features full-size Bosch washer & dryer and Bertazzoni appliances. You can enjoy 5-star amenities including fitness enter, pools, styled lobby with attendant, yoga studio, meeting rooms, private theater. Smart 24/7 live security guard &system & in-building parking.Walk to Grand Central Market, Walt Disney Concert Hall, Little Tokyo, Chinatown, LA Central Library, USC, UCLA, etc.',
	'activeImg' : 'img/listing7/background.png',
	'images' : ['img/listing7/p2.png', 
		'img/listing7/p3.png', 
		'img/listing7/p4.png', 
		'img/listing7/p6.png', 
		'img/listing7/p7.png', 
		'img/listing7/p8.png',
		'img/listing7/p9.png',
		'img/listing7/p10.png',
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
			'img' : 'img/listing7/b1.png'
		}
		],
		'reviews' : [
			{
				'proImg' : 'img/star-jasmine/pro1.png',
				'proName' : 'Tiffany',
				'reviewNum' : '5 Reviews',
				'title' : 'Best hotel in the Area',
				'date' : 'Posted 12/05/2023',
				'score' : '5.0',
				'des' : 'I stayed 5 weeks & truly wish I could have stayed longer. The following month was reserved almost immediately upon my check-in. So that in mind if you’re interested, you may need to book quickly! The views from inside the unit all over the building are gorgeous. Everything is very well kept and clean throughout. The amenities are 5 star. The host is friendly & communicative. Private parking is perfect for coming and going with ease. This place was everything I needed and more, thank you for having me!',
				'review_img' : ["img/star-jasmine/bath1.png", "img/star-jasmine/bath2.png", "img/star-jasmine/bath3.png"],
			},
			{
				'proImg' : 'img/star-jasmine/pro1.png',
				'proName' : 'Jubilee',
				'reviewNum' : '5 Reviews',
				'title' : 'Best hotel in the Area',
				'date' : 'Posted 12/05/2023',
				'score' : '5.0',
				'des' : 'It’s a really nice place for a good price. The bed is comfortable and the bathroom is luxurious. The building feels extremely safe and secure with keyed entry and elevator and 24/7 security. I loved how friendly and helpful the building staff was. The covered parking is perfect. I really enjoyed using the dining table as a computer desk, it worked very well for that. Grand Central Market has great food. It was perfect for a solo traveler like myself.',
				'review_img' : ["img/star-jasmine/bath1.png", "img/star-jasmine/bath2.png", "img/star-jasmine/bath3.png"],
			},
			{
				'proImg' : 'img/star-jasmine/pro1.png',
				'proName' : 'Connor',
				'reviewNum' : '5 Reviews',
				'title' : 'Best hotel in the Area',
				'date' : 'Posted 12/05/2023',
				'score' : '5.0',
				'des' : 'The building is well built. I never heard any neighbor noise inside the unit. The building staff were great. All the amenities, especially the gym, were in top shape. The building goes a long way to securing the facilities which I really appreciated.',
				'review_img' : ["img/star-jasmine/bath1.png", "img/star-jasmine/bath2.png", "img/star-jasmine/bath3.png"],
			}
		],
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