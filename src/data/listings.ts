import { PropertyType } from '../types/property';

export const listings: PropertyType[] = [
  {
    id: '1',
    title: 'Luxury Beachfront Villa with Infinity Pool',
    description: `Experience paradise at this stunning beachfront villa with breathtaking ocean views. This newly renovated property features an infinity pool that seems to merge with the ocean, a spacious deck for sunbathing, and direct beach access.

The interior boasts an open concept design with floor-to-ceiling windows to maximize the view. The gourmet kitchen is equipped with top-of-the-line appliances, perfect for preparing meals to enjoy on the terrace while watching the sunset.

Each bedroom has its own en-suite bathroom and ocean views. The master suite includes a private balcony, walk-in closet, and a luxurious bathroom with a soaking tub overlooking the water.

Ideal for couples or families looking for a luxurious beach getaway with privacy and comfort.`,
    location: 'Malibu, California',
    category: 'beachfront',
    price: 899,
    available: true,
    availableDates: 'Jun 1 - 7',
    images: [
      'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg',
      'https://images.pexels.com/photos/7061662/pexels-photo-7061662.jpeg',
      'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg',
      'https://images.pexels.com/photos/6775267/pexels-photo-6775267.jpeg',
      'https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg',
      'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg'
    ],
    rating: 4.97,
    reviews: [
      {
        user: {
          name: 'Sarah',
          avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
        },
        date: 'May 2025',
        comment: 'Absolutely breathtaking! The views are even better than the pictures. We loved waking up to the sound of the ocean every morning. The host was extremely responsive and made sure we had everything we needed.',
        ratings: {
          cleanliness: 5,
          communication: 5,
          checkIn: 5,
          accuracy: 5,
          location: 5,
          value: 4
        }
      },
      {
        user: {
          name: 'Mark',
          avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
        },
        date: 'April 2025',
        comment: 'Perfect getaway for our anniversary. The infinity pool is amazing - we spent hours just floating and enjoying the view. Kitchen was well-stocked and the beds were very comfortable. Already planning our return trip!',
        ratings: {
          cleanliness: 5,
          communication: 5,
          checkIn: 5,
          accuracy: 5,
          location: 5,
          value: 5
        }
      },
      {
        user: {
          name: 'Jennifer',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
        },
        date: 'March 2025',
        comment: 'This place lives up to the hype. Stunning property with incredible attention to detail. The host\'s recommendations for local restaurants and activities were spot on. A bit pricey but worth every penny.',
        ratings: {
          cleanliness: 5,
          communication: 4,
          checkIn: 5,
          accuracy: 5,
          location: 5,
          value: 4
        }
      },
      {
        user: {
          name: 'David',
          avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
        },
        date: 'February 2025',
        comment: 'We had a magical stay. The house is beautifully designed and the location cannot be beat. Falling asleep to the sound of waves was incredible. The only small issue was that the hot tub took a while to heat up.',
        ratings: {
          cleanliness: 5,
          communication: 5,
          checkIn: 4,
          accuracy: 4,
          location: 5,
          value: 4
        }
      },
      {
        user: {
          name: 'Emma',
          avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
        },
        date: 'January 2025',
        comment: 'Perfect place for our family reunion. Spacious enough for everyone to have privacy but also great common areas for spending time together. The beach access was convenient and the water was beautiful.',
        ratings: {
          cleanliness: 5,
          communication: 5,
          checkIn: 5,
          accuracy: 5,
          location: 5,
          value: 4
        }
      },
      {
        user: {
          name: 'Michael',
          avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
        },
        date: 'December 2024',
        comment: 'An absolutely phenomenal property. We celebrated New Year\'s here and it was magical. The kitchen had everything we needed to prepare a gourmet meal and the dining area with ocean views was spectacular.',
        ratings: {
          cleanliness: 5,
          communication: 5,
          checkIn: 5,
          accuracy: 5,
          location: 5,
          value: 5
        }
      }
    ],
    host: {
      name: 'Jessica',
      avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg',
      isSuperhost: true,
      joinedDate: 'January 2020',
      responseRate: 99,
      responseTime: 'within an hour'
    },
    bedrooms: 4,
    beds: 5,
    baths: 4.5,
    maxGuests: 8,
    amenities: [
      {
        title: 'Property features',
        items: [
          'Beachfront',
          'Ocean view',
          'Infinity pool',
          'Hot tub',
          'Private deck',
          'Outdoor shower',
          'BBQ grill',
          'Fireplace'
        ]
      },
      {
        title: 'Kitchen & dining',
        items: [
          'Gourmet kitchen',
          'Dishwasher',
          'Coffee maker',
          'Wine cooler',
          'Dining area',
          'Outdoor dining area'
        ]
      },
      {
        title: 'Entertainment',
        items: [
          'Smart TV',
          'Sound system',
          'Streaming services',
          'Board games',
          'Books'
        ]
      },
      {
        title: 'Essentials',
        items: [
          'Wifi',
          'Washer',
          'Dryer',
          'Air conditioning',
          'Heating',
          'Essentials',
          'Hangers',
          'Iron',
          'Hair dryer'
        ]
      }
    ],
    checkInTime: '3:00 PM',
    checkOutTime: '11:00 AM'
  },
  {
    id: '2',
    title: 'Cozy Mountain Cabin with Hot Tub',
    description: `Escape to this charming log cabin nestled in the heart of the mountains. With its rustic yet elegant design, this cabin offers the perfect blend of comfort and authentic mountain living.

Step inside to find a warm and inviting space with vaulted ceilings, a stone fireplace, and large windows showcasing the stunning forest views. The fully equipped kitchen makes meal preparation a delight, and the dining area overlooks the trees.

After a day of hiking or skiing, relax in the private hot tub on the deck while stargazing, or cozy up by the fireplace with a good book. The loft bedroom features a comfortable king bed with luxury linens and a skylight for nighttime star viewing.

Perfect for couples seeking a romantic getaway or a small family looking to connect with nature without sacrificing comfort.`,
    location: 'Aspen, Colorado',
    category: 'cabins',
    price: 295,
    available: true,
    availableDates: 'May 15 - Jun 28',
    images: [
      'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      'https://images.pexels.com/photos/5490303/pexels-photo-5490303.jpeg',
      'https://images.pexels.com/photos/6969656/pexels-photo-6969656.jpeg'
    ],
    rating: 4.92,
    reviews: [
      {
        user: {
          name: 'Rachel',
          avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg'
        },
        date: 'April 2025',
        comment: 'This cabin was absolutely perfect for our honeymoon! So cozy and romantic. The hot tub under the stars was magical and we loved how secluded it felt while still being close to town.',
        ratings: {
          cleanliness: 5,
          communication: 5,
          checkIn: 5,
          accuracy: 5,
          location: 5,
          value: 5
        }
      },
      {
        user: {
          name: 'James',
          avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg'
        },
        date: 'March 2025',
        comment: 'We had a wonderful weekend here. The cabin is well-designed and had everything we needed. Hiking trails nearby were fantastic. Only suggestion would be better lighting in the kitchen area.',
        ratings: {
          cleanliness: 5,
          communication: 5,
          checkIn: 5,
          accuracy: 4,
          location: 5,
          value: 4
        }
      },
      {
        user: {
          name: 'Lisa',
          avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg'
        },
        date: 'February 2025',
        comment: 'A fantastic winter getaway! We loved coming back from skiing to relax in the hot tub. The fireplace kept the cabin warm and cozy. The host left us a welcome basket which was a nice touch!',
        ratings: {
          cleanliness: 5,
          communication: 5,
          checkIn: 5,
          accuracy: 5,
          location: 5,
          value: 4
        }
      }
    ],
    host: {
      name: 'Daniel',
      avatar: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg',
      isSuperhost: true,
      joinedDate: 'March 2019',
      responseRate: 97,
      responseTime: 'within a few hours'
    },
    bedrooms: 2,
    beds: 2,
    baths: 1,
    maxGuests: 4,
    amenities: [
      {
        title: 'Property features',
        items: [
          'Mountain view',
          'Hot tub',
          'Private deck',
          'Fireplace',
          'Fire pit'
        ]
      },
      {
        title: 'Kitchen & dining',
        items: [
          'Full kitchen',
          'Coffee maker',
          'Basic cooking supplies',
          'Dining area'
        ]
      },
      {
        title: 'Entertainment',
        items: [
          'TV',
          'Board games',
          'Books',
          'Hiking trails nearby'
        ]
      },
      {
        title: 'Essentials',
        items: [
          'Wifi',
          'Washer',
          'Dryer',
          'Heating',
          'Essentials',
          'Free parking'
        ]
      }
    ],
    checkInTime: '4:00 PM',
    checkOutTime: '11:00 AM'
  },
  {
    id: '3',
    title: 'Modern Downtown Loft with City Views',
    description: `Stay in the heart of the city in this stylish, modern loft with floor-to-ceiling windows offering spectacular skyline views. This contemporary space features high ceilings, exposed brick walls, and sleek furnishings that create an urban oasis.

The open-concept living area includes a comfortable lounge space, a dining area, and a fully equipped kitchen with high-end stainless steel appliances. The bedroom area features a luxurious queen bed with premium linens, and a modern bathroom with a rainfall shower.

Located in the city's vibrant downtown district, you'll be steps away from top restaurants, galleries, shops, and nightlife. Public transportation is easily accessible, making it simple to explore all the city has to offer.

Ideal for solo travelers, couples, or business travelers looking for a central, stylish place to stay with all the comforts of home.`,
    location: 'Chicago, Illinois',
    category: 'design',
    price: 225,
    available: true,
    availableDates: 'May 1 - Jun 15',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
      'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg'
    ],
    rating: 4.88,
    reviews: [
      {
        user: {
          name: 'Alex',
          avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
        },
        date: 'April 2025',
        comment: 'Amazing location and beautiful space! The views at night are incredible. We walked to great restaurants and bars. The bed was very comfortable and the kitchen had everything we needed.',
        ratings: {
          cleanliness: 5,
          communication: 5,
          checkIn: 5,
          accuracy: 5,
          location: 5,
          value: 4
        }
      },
      {
        user: {
          name: 'Morgan',
          avatar: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg'
        },
        date: 'March 2025',
        comment: 'Stylish, clean, and perfectly located. I stayed here for a business trip and it was so much better than a hotel. Fast wifi, great workspace, and I loved being able to cook meals.',
        ratings: {
          cleanliness: 5,
          communication: 4,
          checkIn: 5,
          accuracy: 5,
          location: 5,
          value: 5
        }
      },
      {
        user: {
          name: 'Taylor',
          avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
        },
        date: 'February 2025',
        comment: 'The photos don\'t do this place justice! It\'s even more beautiful in person. Very thoughtfully designed and the host left great recommendations for local spots. It was a bit noisy at night from the street, but that\'s expected downtown.',
        ratings: {
          cleanliness: 5,
          communication: 5,
          checkIn: 5,
          accuracy: 4,
          location: 5,
          value: 4
        }
      }
    ],
    host: {
      name: 'Michelle',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
      isSuperhost: true,
      joinedDate: 'July 2021',
      responseRate: 100,
      responseTime: 'within an hour'
    },
    bedrooms: 1,
    beds: 1,
    baths: 1,
    maxGuests: 2,
    amenities: [
      {
        title: 'Property features',
        items: [
          'City view',
          'Elevator',
          'Fitness center',
          'Rooftop access'
        ]
      },
      {
        title: 'Kitchen & dining',
        items: [
          'Full kitchen',
          'Dishwasher',
          'Espresso machine',
          'Dining area'
        ]
      },
      {
        title: 'Entertainment',
        items: [
          'Smart TV',
          'High-speed WiFi',
          'Bluetooth speaker'
        ]
      },
      {
        title: 'Essentials',
        items: [
          'Wifi',
          'Washer/Dryer in building',
          'Air conditioning',
          'Heating',
          'Workspace',
          'Keyless entry'
        ]
      }
    ],
    checkInTime: '3:00 PM',
    checkOutTime: '11:00 AM'
  },
  {
    id: '4',
    title: 'Charming Countryside Cottage with Garden',
    description: `Escape to the peaceful countryside in this enchanting cottage surrounded by lush gardens and rolling hills. This lovingly restored 19th-century stone cottage combines rustic charm with modern comforts.

Inside, you'll find original features like exposed wooden beams and a brick fireplace alongside comfortable furnishings and updated amenities. The fully equipped country kitchen opens onto a dining area with garden views. The cozy living room has comfortable seating around the fireplace - perfect for relaxing evenings.

Outside, enjoy the private garden with a patio area for al fresco dining, beautiful flower beds, and a small herb garden you're welcome to use in your cooking. Take walks directly from the cottage door through meadows and woodland paths.

The perfect retreat for those seeking tranquility and a connection with nature while still being just a short drive from villages with shops, pubs, and restaurants.`,
    location: 'Cotswolds, England',
    category: 'countryside',
    price: 175,
    available: true,
    availableDates: 'May 5 - Jun 20',
    images: [
      'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      'https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg',
      'https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg',
      'https://images.pexels.com/photos/3935328/pexels-photo-3935328.jpeg'
    ],
    rating: 4.96,
    reviews: [
      {
        user: {
          name: 'Catherine',
          avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg'
        },
        date: 'April 2025',
        comment: 'The perfect countryside getaway! The cottage was so cozy and the garden was beautiful. We loved watching the birds in the morning with our coffee and taking walks through the countryside.',
        ratings: {
          cleanliness: 5,
          communication: 5,
          checkIn: 5,
          accuracy: 5,
          location: 5,
          value: 5
        }
      },
      {
        user: {
          name: 'Robert',
          avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
        },
        date: 'March 2025',
        comment: 'We had such a relaxing stay at this lovely cottage. It\'s beautifully decorated and had everything we needed. The fireplace was wonderful in the evenings and the host left us local eggs and bread which was a nice touch.',
        ratings: {
          cleanliness: 5,
          communication: 5,
          checkIn: 5,
          accuracy: 5,
          location: 5,
          value: 4
        }
      },
      {
        user: {
          name: 'Elizabeth',
          avatar: 'https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg'
        },
        date: 'February 2025',
        comment: 'Such a charming place! The cottage was the perfect base for exploring the Cotswolds. Comfortable bed, well-stocked kitchen, and the garden was lovely even in winter. Can\'t wait to return in summer to see it in full bloom!',
        ratings: {
          cleanliness: 5,
          communication: 5,
          checkIn: 4,
          accuracy: 5,
          location: 5,
          value: 5
        }
      }
    ],
    host: {
      name: 'Eleanor',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      isSuperhost: true,
      joinedDate: 'April 2018',
      responseRate: 98,
      responseTime: 'within a day'
    },
    bedrooms: 2,
    beds: 2,
    baths: 1,
    maxGuests: 4,
    amenities: [
      {
        title: 'Property features',
        items: [
          'Garden view',
          'Fireplace',
          'Private patio',
          'Garden',
          'Free parking'
        ]
      },
      {
        title: 'Kitchen & dining',
        items: [
          'Country kitchen',
          'Oven',
          'Coffee maker',
          'Dining area',
          'Garden dining'
        ]
      },
      {
        title: 'Entertainment',
        items: [
          'Books',
          'Board games',
          'TV',
          'Garden games'
        ]
      },
      {
        title: 'Essentials',
        items: [
          'Wifi',
          'Washing machine',
          'Heating',
          'Essentials',
          'Fireplace supplies'
        ]
      }
    ],
    checkInTime: '4:00 PM',
    checkOutTime: '10:00 AM'
  },
  {
    id: '5',
    title: 'Luxury Treehouse Retreat with Forest Views',
    description: `Experience the magic of living among the trees in this architectural masterpiece that combines luxury with nature. Perched 30 feet above the forest floor, this treehouse offers a unique and unforgettable experience.

The interior features beautiful craftsmanship with hardwood floors, cedar walls, and large windows that bring the outside in. The main space includes a comfortable living area, a kitchenette, and a dining nook surrounded by windows with panoramic forest views. The bedroom area has a queen bed with luxury linens and skylights for stargazing.

The wraparound deck is the perfect spot for morning coffee while listening to birdsong or evening drinks as the sun sets through the trees. A spiral staircase leads down to a private hot tub nestled among the trees.

Despite the feeling of seclusion, you're just a short drive from wineries, restaurants, and hiking trails. This is truly a magical escape for couples seeking a romantic retreat or solo travelers looking for inspiration.`,
    location: 'Sonoma, California',
    category: 'tiny-homes',
    price: 325,
    available: true,
    availableDates: 'May 10 - Jun 15',
    images: [
      'https://images.pexels.com/photos/2419375/pexels-photo-2419375.jpeg',
      'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg',
      'https://images.pexels.com/photos/8880034/pexels-photo-8880034.jpeg',
      'https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg',
      'https://images.pexels.com/photos/4119832/pexels-photo-4119832.jpeg'
    ],
    rating: 4.94,
    reviews: [
      {
        user: {
          name: 'Olivia',
          avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg'
        },
        date: 'April 2025',
        comment: 'Absolutely magical! Waking up surrounded by trees was an experience we\'ll never forget. The craftsmanship of this treehouse is amazing and the hot tub under the stars was the perfect way to end each day.',
        ratings: {
          cleanliness: 5,
          communication: 5,
          checkIn: 5,
          accuracy: 5,
          location: 5,
          value: 5
        }
      },
      {
        user: {
          name: 'Nathan',
          avatar: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg'
        },
        date: 'March 2025',
        comment: 'I surprised my wife for our anniversary with a stay here and it was perfect! So romantic and peaceful. We loved the small details like the provided binoculars for bird watching and the bottle of local wine waiting for us.',
        ratings: {
          cleanliness: 5,
          communication: 5,
          checkIn: 5,
          accuracy: 5,
          location: 5,
          value: 4
        }
      },
      {
        user: {
          name: 'Sophia',
          avatar: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg'
        },
        date: 'February 2025',
        comment: 'A truly unique experience! The treehouse is beautifully designed and feels so private. I came for a solo writing retreat and found the peaceful setting incredibly inspiring. The only downside was having to leave!',
        ratings: {
          cleanliness: 5,
          communication: 4,
          checkIn: 5,
          accuracy: 5,
          location: 5,
          value: 4
        }
      }
    ],
    host: {
      name: 'Benjamin',
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
      isSuperhost: true,
      joinedDate: 'January 2019',
      responseRate: 99,
      responseTime: 'within a few hours'
    },
    bedrooms: 1,
    beds: 1,
    baths: 1,
    maxGuests: 2,
    amenities: [
      {
        title: 'Property features',
        items: [
          'Forest view',
          'Private deck',
          'Hot tub',
          'Outdoor shower'
        ]
      },
      {
        title: 'Kitchen & dining',
        items: [
          'Kitchenette',
          'Mini fridge',
          'Coffee maker',
          'Dining nook'
        ]
      },
      {
        title: 'Entertainment',
        items: [
          'Bluetooth speaker',
          'Books',
          'Binoculars',
          'Playing cards'
        ]
      },
      {
        title: 'Essentials',
        items: [
          'Wifi',
          'Heating',
          'Air conditioning',
          'Essentials',
          'Free parking'
        ]
      }
    ],
    checkInTime: '3:00 PM',
    checkOutTime: '11:00 AM'
  },
  {
    id: '6',
    title: 'Stunning Lake House with Private Dock',
    description: `Escape to this beautiful lakefront property offering panoramic water views and direct lake access. This modern lake house is the perfect blend of rustic charm and contemporary comfort.

The open concept main floor features a fully equipped kitchen, dining area, and a comfortable living room with a stone fireplace. Floor-to-ceiling windows showcase the spectacular lake views, and sliding doors open to a large deck overlooking the water.

The property includes a private dock where you can swim, fish, or launch kayaks (two are provided for guest use). Enjoy morning coffee on the deck while watching the sunrise over the lake, spend the day on the water, and end the evening around the lakeside fire pit roasting marshmallows under the stars.

Ideal for families or friend groups looking for a peaceful lakeside retreat with plenty of outdoor recreation options.`,
    location: 'Lake Tahoe, Nevada',
    category: 'lakefront',
    price: 450,
    available: true,
    availableDates: 'May 15 - Jun 30',
    images: [
      'https://images.pexels.com/photos/2104151/pexels-photo-2104151.jpeg',
      'https://images.pexels.com/photos/4119831/pexels-photo-4119831.jpeg',
      'https://images.pexels.com/photos/5731856/pexels-photo-5731856.jpeg',
      'https://images.pexels.com/photos/951539/pexels-photo-951539.jpeg',
      'https://images.pexels.com/photos/5998050/pexels-photo-5998050.jpeg'
    ],
    rating: 4.91,
    reviews: [
      {
        user: {
          name: 'Thomas',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
        },
        date: 'April 2025',
        comment: 'Incredible location! We spent all our time either on the lake using the kayaks or sitting on the deck enjoying the view. The house is beautiful and had everything we needed. Already booked again for next summer!',
        ratings: {
          cleanliness: 5,
          communication: 5,
          checkIn: 5,
          accuracy: 5,
          location: 5,
          value: 4
        }
      },
      {
        user: {
          name: 'Jessica',
          avatar: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg'
        },
        date: 'March 2025',
        comment: 'Perfect for our family vacation! The kids loved swimming off the dock and the adults enjoyed relaxing on the deck with a glass of wine. Kitchen was well-stocked for cooking group meals. We made such wonderful memories here.',
        ratings: {
          cleanliness: 4,
          communication: 5,
          checkIn: 5,
          accuracy: 5,
          location: 5,
          value: 5
        }
      },
      {
        user: {
          name: 'Christopher',
          avatar: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg'
        },
        date: 'February 2025',
        comment: 'Lake Tahoe is beautiful year-round! We came for a winter stay and loved watching the snow fall over the lake from the cozy living room. The fireplace kept us warm and the kitchen was great for cooking hearty meals after a day of skiing nearby.',
        ratings: {
          cleanliness: 5,
          communication: 4,
          checkIn: 5,
          accuracy: 5,
          location: 5,
          value: 5
        }
      }
    ],
    host: {
      name: 'Laura',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      isSuperhost: true,
      joinedDate: 'May 2020',
      responseRate: 98,
      responseTime: 'within a few hours'
    },
    bedrooms: 3,
    beds: 4,
    baths: 2,
    maxGuests: 8,
    amenities: [
      {
        title: 'Property features',
        items: [
          'Lake view',
          'Waterfront',
          'Private dock',
          'Fire pit',
          'Deck',
          'Kayaks provided'
        ]
      },
      {
        title: 'Kitchen & dining',
        items: [
          'Full kitchen',
          'Dishwasher',
          'Coffee maker',
          'BBQ grill',
          'Dining area'
        ]
      },
      {
        title: 'Entertainment',
        items: [
          'Smart TV',
          'Board games',
          'Kayaks',
          'Fishing equipment'
        ]
      },
      {
        title: 'Essentials',
        items: [
          'Wifi',
          'Washer',
          'Dryer',
          'Heating',
          'Air conditioning',
          'Free parking'
        ]
      }
    ],
    checkInTime: '4:00 PM',
    checkOutTime: '11:00 AM'
  }
];