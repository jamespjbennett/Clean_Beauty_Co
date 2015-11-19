# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
BlogEntry.delete_all

BlogEntry.create(
  title: "Scrub Me Senseless", 
  introduction_text: "Exfoliation was at the top of my list to replace clean. I’m a big exfoliator, there’s something satisfying about physically scrubbing away dead skin and the feeling of unclogging pores. I especially loved the scrubs with those little beads in, so you really got that abrasive feeling as you scrubbed. Problem is, those little beads are made of plastic, and not only does that mean you’re rubbing polythene all over your face, yuck, it’s actually really toxic for the environment. You know the big deal with plastic bottles and bags? Non-biodegradable. So the beads end up floating in our oceans, being eaten by our fish, and probably end up right back where they started. With us.",
  content: "Here’s the low down on some natural exfoliators and a nice recipe I’ve tried today.

Sea Salt - great for body scrubs, make sure it’s ground down though, can be a bit scratchy. A bit too rough for the face and also you can end up with a salty taste in your mouth, which probably isn’t what you want first thing. Sea salt is found in our Gymaholic body scrub, mixed with sugar and luxurious oils.

Jojoba Beads - lush, with a vibrant electric blue colour. These are made from biodegradable jojoba wax, which means that it has all the properties of the jojoba plant, and it means they deteriorate naturally. We’ve included this in our Ocean Scrub, a decadent scrub with vegetable glycerin and sea salt.

Oatmeal - is a very gentle exfoliant, so it’s perfect for sensitive skin. It is a natural anti-inflammatory and is very moisturising. It’s great to mix with yoghurt or kefir, which are great antioxidants for when your pores are open post-scrubbing. The lactic acid in both also help to gently wipe away dead skin cells.

Ground Rosehip - the seeds from the rosehip plant also make for great, natural exfoliants. Rose has very healing properties, as well as being rich in Vitamin C and E. The ground powder nourishes the skin while gently wiping away dead skin cells. It also smells absolutely lovely so no complaints there.

Here’s a recipe to try using the rosehip along with ayurvedic rose powder, rose hydrolat and some rosehip oil. They sound like obscure ingredients, but most of our stockists sell the ingredients, and Aroma Zone’s particularly are really reasonably priced.

Mix equal parts Ground Rosehip and Rose Powder, and add the oil and hydrolat slowly until you reach the desired consistency. Use as a normal scrub and wash off after use.

Dominika x" ,
  image: "http://cleanbeautyco.com/wp-content/uploads/2015/05/image11.jpg" 
  )