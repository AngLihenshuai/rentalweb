/*
 * @Author: archiecheng archiechengice@outlook.com
 * @Date: 2024-07-29 15:47:29
 * @LastEditors: archiecheng archiechengice@outlook.com
 * @LastEditTime: 2024-07-29 16:23:20
 * @FilePath: \rentalweb\house-db\listing2_db.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
house_db = {
	'title' : 'Comfy 6B3B @ Heart Moreno Valley',
	'bk_image' : 'img/listing2/background.png',
	'coupon_image' : 'img/star-jasmine/p3.png',
	'decorate_image' : 'img/star-jasmine/p2.png',
	'contact' : '+562 846 2887',
	'link_a' : 'www.airbnb.com/rooms/',
	'link_b' : '1159647163276259319',
	'location' : 'Moreno Valley, California, United States',
	'des' : 'Looking for a spacious and comfortable home away from home? Look no further than this stunning 6B3B property located in a quiet and safe neighborhood. With a total of 2644 SF, this  comfy house features open-concept living area that boasts plenty of natural light, creating a warm and inviting atmosphere. Whip up your favorite meals in the fully-equipped kitchen, complete with modern appliances and ample counter space and two dining tables. Each of the six bedrooms is well-appointed.',
	'activeImg' : 'img/listing2/background.png',
	'images' : ['img/listing2/p2.png', 
		'img/listing2/p3.png', 
		'img/listing2/p4.png', 
		'img/listing2/p6.png', 
		'img/listing2/p7.png', 
		'img/listing2/p8.png',
		'img/listing2/p9.png', 
		'img/listing2/p10.png',
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
			'img' : 'img/listing2/b1.png'
		},
		{
			'name' : 'Deluxe Room',
			'load' : '3 Persons',
			'price' : '$150',
			'img' : 'img/listing2/b2.png'
		},
		{
			'name' : 'Signature Room',
			'load' : '4 Persons',
			'price' : '$110',
			'img' : 'img/listing2/b4.png'
		},
		{
			'name' : 'Deluxe Room',
			'load' : '3 Persons',
			'price' : '$150',
			'img' : 'img/listing2/b5.png'
		},
		{
			'name' : 'Signature Room',
			'load' : '4 Persons',
			'price' : '$110',
			'img' : 'img/listing2/b6.png'
		},
		{
			'name' : 'Signature Room',
			'load' : '4 Persons',
			'price' : '$110',
			'img' : 'img/listing2/b7.png'
		},
		{
			'name' : 'Signature Room',
			'load' : '4 Persons',
			'price' : '$110',
			'img' : 'img/listing2/b8.png'
		}],
		'reviews' : [
		{
			'proImg' : 'img/star-jasmine/pro1.png',
			'proName' : 'Jose Pablo',
			'reviewNum' : '5 Reviews',
			'title' : 'Best hotel in the Area',
			'date' : 'Posted 12/05/2023',
			'score' : '5.0',
			'des' : 'This Airbnb was a great stay! It was very accommodating and comfortable. Sijun was very welcoming and nice, definitely would book again with her',
			'review_img' : ["img/star-jasmine/bath1.png", "img/star-jasmine/bath2.png", "img/star-jasmine/bath3.png"],
		},
		{
			'proImg' : 'img/star-jasmine/pro1.png',
			'proName' : 'Zarayari',
			'reviewNum' : '8 Reviews',
			'title' : 'Very comfortable',
			'date' : 'Posted 01/06/2024',
			'score' : '5.0',
			'des' : 'Great host!',
			'review_img' : []
		},
		{
			'proImg' : 'img/star-jasmine/pro1.png',
			'proName' : 'Morris',
			'reviewNum' : '8 Reviews',
			'title' : 'Very comfortable',
			'date' : 'Posted 01/06/2024',
			'score' : '5.0',
			'des' : 'Great place and Sijunn was very helpful and communicated very quickly to any request. We plan to stay there again',
			'review_img' : []
		},
		{
			'proImg' : 'img/star-jasmine/pro1.png',
			'proName' : 'Jorge',
			'reviewNum' : '8 Reviews',
			'title' : 'Very comfortable',
			'date' : 'Posted 01/06/2024',
			'score' : '5.0',
			'des' : 'Great stay, nice and peaceful home. Lots of space so we didn’t feel cluttered and it was in a nice and quiet area.',
			'review_img' : []
		},
		{
			'proImg' : 'img/star-jasmine/pro1.png',
			'proName' : 'Kayla',
			'reviewNum' : '8 Reviews',
			'title' : 'Very comfortable',
			'date' : 'Posted 01/06/2024',
			'score' : '5.0',
			'des' : 'Comfortable stay',
			'review_img' : []
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