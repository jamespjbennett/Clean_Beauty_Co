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

BlogEntry.create(
  title: "Part Two: Because You're Totally Worth It.",
  introduction_text: "So, you want to join the Clean Beauty band wagon. You’ve read our spiel, you like what we do. You get it. You too agonise over food packets, eat organic, say no to the processed and refined, spend hours making gluten free, dairy free, sugar free, beetroot brownies from scratch. All because you care about what you put in your body. You understand what it means for your health. And now you’ve made the link that the same applies to your skin. Your skin - the biggest organ in your body. Absorbing the chemical-filled, processed, often harmful beauty products that you religiously slather all over it. You get it." ,
  content: "But making the switch isn’t that easy. And you know what? We hear you. There is just so little time. You work hard, gym harder(ish), you’re training for that 10k/half marathon/marathon/triathlon, you cook, fuss over your (rather demanding in my case) partner, forget to call your mum and love a Thursday night glass (bottle) of wine with the girls. You spend your wages on clothes and holidays, then regret it for the rest of the month. How on earth will you then have the time - or money - to invest in clean beauty? We totally hear you.

Not only that, but you have a beauty routine in place and quite frankly it’d be a complete pain in the A to change it. You’ve been using the same cleanser since you were 13 and will happily smash twenty quid on a moisturiser because it promises to contain THE secret to anti-ageing, time-travelling, gravity-defying skin.

So why change the habit of a lifetime?

THIS IS WHY. Your skin deserves better. You deserve better. You need to trust us on this. The initial investment will be totally worth it when you see the benefits. Still not convinced? Here are the first two changes that I’ve seen since going clean (and this has literally been less than two months):

1. SPOTS. Or lack of. Despite no longer sitting in a teenage age bracket, I was still getting spots. Regularly getting spots, in fact. Breakouts, mainly on my cheeks, that weren’t linked to time of month or lack of water or change in diet. My way of dealing with them was to dab with sucadrem (contains petroleum-based paraffin among other chemicals), toothpaste or occasionally Benzoyl Peroxide (don’t even get me started on this). Needless to say none of this worked and I’d end up caking on the makeup for days until the blemish cleared.

This was the first change that I noticed once I started using CBCo products. My skin is so much clearer! I honestly haven’t had a spot for months and that, as far as I’m concerned, is well worth chucking out a few Clarins toners and taking the time to make my own. My skin is loving the abundance of pure ingredients and can finally breathe without a thick layer of chemicals clogging and suffocating it.

2. DARK UNDER-EYE CIRCLES.  Gah, these guys are the worst and I got them really bad. Of course sleep and diet have a part to play, but equally the skin under your eyes is incredibly thin, fragile and sensitive to what you put on it. The under-eye creams that claim to work miracles lack the vitamins and nutrients that are needed to stimulate circulation and hydrate this delicate area. Our CBCo recipes are high in all the good stuff and ingredients such as Rose and Almond Oil have worked their magic. I have to have a really late night to get dark circles now and they’re nothing that a dab of No Fuss Moisturiser or a sptriz of Rosy Glow won’t fix.

And if that isn’t direct ROI then we don’t know what is. Among other things, investing in clean beauty helps to improve the natural appearance of skin meaning we don’t have to hide blemishes and imperfections with oodles of makeup. Less makeup = half an hour longer in bed in the mornings and more money to spend in Topshop. WIN.

Elsie x" ,
  image: "http://cleanbeautyco.com/wp-content/uploads/2015/04/IMG_06011-e1429561214427.jpg" 
)

BlogEntry.create(
  title: "Dirty Ingredients" ,
  introduction_text: "An ingredients list on a bottle normally reads like a chemistry lab experiment. It’s overwhelming and frightening and it all sounds too technical for us to understand. The point is, not all of those ingredients are bad, and many of those chemicals are naturally and organically occurring substances that are good for us and our skin. What we don’t want are the known, or even suspected, chemicals that are toxic for us and the environment." ,
  content: "An ingredients list on a bottle normally reads like a chemistry lab experiment. It’s overwhelming and frightening and it all sounds too technical for us to understand. The point is, not all of those ingredients are bad, and many of those chemicals are naturally and organically occurring substances that are good for us and our skin. What we don’t want are the known, or even suspected, chemicals that are toxic for us and the environment.



We’ve highlighted a list of absolute criminals that are used by many cosmetics companies. We are in the EU which is more regulated than the US, where 1500 chemicals are banned for commercial use, compared to the measly 3 in the US. Some of these ingredients won’t be found in EU products, but for our international readers, we thought it was important to include nonetheless. Familiarise yourself with these baddies, if you see them in your products, ditch them. It’s just not worth the risk.

If you need help discerning the good from the bad, there is a fantastic app called Think Dirty, where you can scan your barcode and it will tell you how dirty or clean your product is and what ingredients are making it toxic. It’s a fantastic tool and very eye opening. Be prepared to open your trash can a few times! This is a great tool to start educating yourself beyond what is written here and starting your clean beauty journey.

Dominika x

Parabens: These are synthetic preservatives used in a 85% of cosmetics. Parabens have been linked to a wide variety of side effects including being a possible endocrine disrupter and causing developmental toxicity. However, parabens have been found in the tissue of breast cancer tumours, leading many to speculate the direct correlation. Point is I’m not hanging around until it’s proven. Get. Rid.

Triclosan: This is a synthetic antibacterial ingredient used in toothpaste and antibacterial hand washes. It is considered a pesticide, so is a risk to humans and the environment, as well as being classed as a chlorophenol, potential carcinogens. It embeds itself within fatty deposits in the body, so can build up to toxic levels over time, posing threats to the liver, kidneys and lungs.

Mineral Oil: This is a petroleum by-product that has a plastic coating effect, clogging the skin and inhibits the skins ability to eliminate toxins. It slows down skin function and regeneration, so could actually promote premature aging.

Parfum: The issue with this ingredient is that it can be anything, because their recipe is considered a trade secret. Considering all the filth that is already labelled, who really knows what’s in it. Some fragrance ingredients can trigger allergies and asthma; ever got a cough or headache after spraying too much perfume? Some, of course, are linked to cancer and neurotoxicity. The average consumer won’t know you’re getting, so best to avoid.

Heavy Metals: Things like lead, aluminium, mercury, iron and chromium. Frequent exposure to heavy metals have been linked from everything to reproductive, immune and nervous system disorders. The concern with these in our cosmetics is that the body cannot rid itself naturally of heavy metals, so over a life the body can accumulate toxic levels after being exposed to so many. Also bearing in mind that environmentally, we are exposed to many heavy metals throughout the day; why weigh down our bodies even more by having them in all our personal care products?

Sodium Lauryl/Laureth Sulfate: This sneaky ingredient is a foaming agent, so is present in a whole lot of products. This chemical strips the skin of natural oils and protective barriers, which can lead to dandruff, flaky skin, acne and quicker aging. Sometimes they’re also contaminated with a carcinogen called 1,4-dioxane, and manufactures don’t have to declare whether its present on the label. There are plenty of natural foamers around, there’s no need to use SLS!

Imidazolidinyl Urea : One of the many preservatives that is a formaldehyde releasing agent. While the exposure per use is low, over time this may cause joint pain, skin reactions, allergies and aggravate coughs and colds. Other possible long-term side effects include weakening the immune system and cancer. Sounds lush! Not.

Information gathered from the following sources, amongst others:

http://www.organicbeautytalk.com/ingredients-to-avoid/

http://www.safecosmetics.org/get-the-facts/chemicals-of-concern/

http://www.davidsuzuki.org/issues/health/science/toxics/dirty-dozen-cosmetic-chemicals/

http://theeverygirl.com/5-ingredients-you-don-t-want-near-your-face",
  image: "http://cleanbeautyco.com/wp-content/uploads/2015/05/Untitled-e1430472528439-825x388.png"
)

BlogEntry.create(
  title: "CBCo's Cheat Guide To Going Clean" ,
  introduction_text: "This one's for the cynics, the time-poor, cash-low, curious, nervous, newbies, old-timers, high-flyers. Those of you that want a clean beauty quickie, this is our cheat's guide to the products you need to get your clean fix fast (and if we were on a desert island, the ones we absolutely couldn't do without).",
  content: "This one’s for the cynics, the time-poor, cash-low, curious, nervous, newbies, old-timers, high-flyers. Those of you that want a clean beauty quickie, this is our cheat’s guide to the products you need to get your clean fix fast (and if we were on a desert island, the ones we absolutely couldn’t do without).

1. Coconut Oil. All hail this glorious stuff. This is not the first time you’ll hear us sing the praises of coconut oil and it certainly will not be the last (we’ve pretty much got a shrine at CBCo HQ). But there is method behind the madness and it’s mainly this: coconut oil is so darn versatile. We’ve been known to use it as a face moisturiser, hair treatment, lip balm, bath soak, to soothe shaving rash or my favourite is as an in-shower moisturiser so I don’t have to flap around waiting for my moisturiser to dry before I get dressed. We recommended you invest in a large tub and keep it in your bathroom, it will last for ages.
 
2. Rose Water. Rose is insanely good for your skin (notably anti-ageing and super moisturising) which is why it’s so expensive to buy as an essential oil, so Rose Water is a much more cost efficient and practical way to reap the benefits. It’s ideal as a toner and a little goes a long way, but it can also be great mixed with clay for face masks or added to bath water. Our top tip is to carry around a small spray bottle filled with the stuff as a quick spritz on the face will brighten and refresh.
 
 
3. A Natural Exfoliant. You have a little choice here. Our fave is coffee as it stimulates blood flow so is awesome at zapping that irritating bit of cellulite that JUST WON’T GO, but you can also choose from raw organic cane sugar, Himalayan salt, jojoba beads or finely ground walnut. Simply mix a little with your face wash or shower gel (obviously we highly recommend both of these are natural, Whole Foods have some great options if you’re not into making your own) for an instant scrub. We don’t need to educate you on the benefits of exfoliating, we all read J17 Magazine growing up, but your skin won’t be subject to any nasties with these natural options and you’ll be smooth as a peach in no time.
 " ,
  image: "http://cleanbeautyco.com/wp-content/uploads/2015/04/2J8A2210-1-825x510.jpg"
)

BlogEntry.create(
  title: "Scrub Me Senseless" ,
  introduction_text: "Exfoliation was at the top of my list to replace clean. I’m a big exfoliator, there’s something satisfying about physically scrubbing away dead skin and the feeling of unclogging pores. I especially loved the scrubs with those little beads in, so you really got that abrasive feeling as you scrubbed. Problem is, those little beads are made of plastic, and not only does that mean you’re rubbing polythene all over your face, yuck, it’s actually really toxic for the environment. You know the big deal with plastic bottles and bags? Non-biodegradable. So the beads end up floating in our oceans, being eaten by our fish, and probably end up right back where they started. With us.",
  content: "Here’s the low down on some natural exfoliators and a nice recipe I’ve tried today.

Sea Salt - great for body scrubs, make sure it’s ground down though, can be a bit scratchy. A bit too rough for the face and also you can end up with a salty taste in your mouth, which probably isn’t what you want first thing. Sea salt is found in our Gymaholic body scrub, mixed with sugar and luxurious oils.

Jojoba Beads - lush, with a vibrant electric blue colour. These are made from biodegradable jojoba wax, which means that it has all the properties of the jojoba plant, and it means they deteriorate naturally. We’ve included this in our Ocean Scrub, a decadent scrub with vegetable glycerin and sea salt.

Oatmeal - is a very gentle exfoliant, so it’s perfect for sensitive skin. It is a natural anti-inflammatory and is very moisturising. It’s great to mix with yoghurt or kefir, which are great antioxidants for when your pores are open post-scrubbing. The lactic acid in both also help to gently wipe away dead skin cells.

Ground Rosehip - the seeds from the rosehip plant also make for great, natural exfoliants. Rose has very healing properties, as well as being rich in Vitamin C and E. The ground powder nourishes the skin while gently wiping away dead skin cells. It also smells absolutely lovely so no complaints there.

Here’s a recipe to try using the rosehip along with ayurvedic rose powder, rose hydrolat and some rosehip oil. They sound like obscure ingredients, but most of our stockists sell the ingredients, and Aroma Zone’s particularly are really reasonably priced.

Mix equal parts Ground Rosehip and Rose Powder, and add the oil and hydrolat slowly until you reach the desired consistency. Use as a normal scrub and wash off after use.

Dominika x",
  image: "http://cleanbeautyco.com/wp-content/uploads/2015/05/image1-825x510.jpg"
)

BlogEntry.create(
  title: "Lacking The Lash Appeal",
  introduction_text: "I'm a mascara fiend. Obsessed with the stuff. A mascaraholic, some might say. Of all my cosmetic items, mascara is the one that I look forward to applying in the mornings (that's a bit sad, isn't it?). I like what it does to my eyes and feel it's the one item that really makes a difference.

That's probably because I wear, well, a lot of it. Like 5 or 6 layers. I'll apply, then wait to dry, then reapply. Then repeat. I don't generally dig the whole barbie look, it's not really my thing, so I try to avoid anything fake looking (hair, boobs, tan). Exceeeeept when it comes to mascara. I like the way a fresh coat pops my eyes, the bigger, longer and thicker the better.",
  content: "So I was nervous about switching out the mascara brand that i know and love and trust and have been using for 10 years, for a natural alternative.

Dipping my toe in the water for the first time, I decided to try out the RMS Beauty Volumising Mascara. Ive read a lot about the brand and like their story. I like the fact that Rosie-Marie Swift has such great experience in the industry and that her brand is so informative about the dangers of and harmful chemicals found in high street cosmetics. It seemed like a safe place to start.

Here is my honest and impartial take on my first stab at natural mascara...

This mascara is great because:
- It adds length and separates. Like the Rimmel adverts when they zoom in on the model and she looks like she has spiders sat on her eyelids. I happen to quite like that look but it might not be to everyone's taste.
- It's a nice consistency. Not too clumpy which, when you apply on the tube/at your desk/in the gym/at the dinner table while you wait for your mate/at a red light on your bike like me, is important. No one wants eyelash clumps man.

This mascara sucks because:
- It doesn't stay put. This pains me to say as I was rooting for this brand and on initial application thought I'd nailed it. But unfortunately, a couple of hours after applying and I look like a blonde panda. Perhaps it's because I wear so much, either way the stay-factor of a mascara is important and RMS just didn't cut it. Waaaaaa.

Verdict:
Great for light mascara wearers or those that are able to check the mirror every hour or so and tidy up the irritating little smudges. The initial effect of this stuff is good and it makes for very pretty eyelashes, it just needs to stick to lashes a little better.

It's not cheap at £20 a pop so I'm going to see it through til it's finished (I'm just a little more conscious of mopping up the residue every few hours with a bit coconut oil) but I am definitely in the market for a new one.

Elsie x" ,
  image: "http://cleanbeautyco.com/wp-content/uploads/2015/05/orig-825x510.jpg"
)

BlogEntry.create(
  title: "Kitchen Supplies",
  introduction_text: "We’ve been loving all the feedback so far on CBCo, thanks so much for all your thoughts and comments. Keep ‘em coming!

One pain point that has come up a few times is that while, it’s great in theory to make your own products at home, who can really be assed to go online, order, wait for it to arrive, shove your flatmates out of the kitchen and cook up a storm. We hear ya!",
  content: "So, to help all the wannabe CBC-coers out, I’ve put together a list of super easy recipes that you can make from ingredients right from your kitchen cupboard. If you’re a healthy eater, chances are you have these bits and bobs lying around.

What’s that saying? Walk before you run, or maybe mix before you emulsify in this case?

Face

Mix honey and cinnamon for a deep cleansing, declogging wonder. Leave it on until it tingles and watch your open pores and blackheads vaporise.

For those non-vegans, whisk up some egg whites and lather them all over. Others have likened it to a natural botox.

Mix some oats and banana for a nourishing and gently exfoliating mask that will eat up dead skin cells and leave with you an after glow. Also great for breakfast!

Tried to make sushi at home and failed? Don’t worry, we’ve all been there. Take those left over seaweed sheets, soak them in green tea, and place on your face for an anti-oxidising boost to your face routine.

All those superfoods you add to smoothies? Add it to your facemask! Spirulina, baobab, goji, acai, chlorella will all do wonders for your skin, like they do for your body.

Body

Dig out the leftover coffee from the plunger and rub all over for a cellulite zapping, electric scrub that will wake you up as much as your morning brew.

Love cooking with sea salt and put it in your grinder? Save a handful and scrub all over next time you’re in the shower. Mix it with a body oil for a luxurious start to the day. Same goes for brown sugar left over from when you used to bake sugar goods. Scrub while you eat your beetroot brownie and feel smug.

Obviously, we couldn't go without mentioning coconut oil, which any clean foodie will have in abundance. Keep a pot in the shower and just start at the top and pour down.

Bath

Oatmeal in a muslin cloth bag (or just put a hair tie around your cloth to make it a bag) will result in a bath of milky goodness.

Have muscle inflammation or arthritis, douse some apple cider vinegar into your bath for effective relief. You’ll also sleep better.

Ok ok, you might not have this in your cupboard, but it’s so worth buying. You can get a 2kg sack on Amazon, so just do it. Epsom salts are just my holy grail, especially as I exercise so much. Mix it with bi-carb soda and lavender for a detox or with your favourite essential oil.

Dominika x",
  image: "http://cleanbeautyco.com/wp-content/uploads/2015/05/skincare_ingredients-825x503.jpg"
)

BlogEntry.create(
  title: "Witness The Fitness" ,
  introduction_text: "Exercise is a big part of our lives here at CBCo. When we're not inventing recipes or doing our day jobs, we'll most likely be found at the gym. It was on a recent run in Regents Park that I noticed something.

An abundance of girls swiftly trotting in brand new, animal print Nikes. The sheer amount of sports watches clinging to sweaty wrists. So much fluro. The truth is, exercise got sexy. Training hard is trendy. Working out is keeeewl." ,
  content: "But, unlike faddy fashions that come and go, this one actually means a lot more for our society. At a time when obesity levels are at their highest, what better trend can sweep the western world than one that actively supports being fit? That encourages young people to exercise (and look bloody good while they're at it)?

At the beginning of last year I played the odd game of netball and happily considered my cycle to work a sufficient amount of cardio exercise. Fast forward a year and I've completed a 64 mile walk to Brighton, a half marathon, a 10k run and an Olympic distance triathlon. I honestly don't think I would have seen any of that through without being inspired by this latest craze. From my gym buddies (namely CBCo partner Dominika) to my Instagram feed to the really hot girl in the gym (she has banging running tights). The feeling that you're part of a club or a gang is strangely motivating and it comes back to the fact that everyone's at it.

The whole gym scene can be preeeeetty daunting and often tough to even know where to start. So CBCo have thrown together a couple of dos and don'ts from the point of view of two complete amateurs.

Do

Get your beauty kit prepped. Having a set of mini toiletries that stay in your gym bag make it so much easier to grab your stuff and go. We double up when making recipes but it's easy enough to do with your existing beauty products - invest in some mini bottles and you're good to go (ideally glass as they maintain your product's potency but if you can't get hold of them then Boots or even Primark have the plastic ones).
Give your gym kit a rehaul. Gone are the days that I buy sagging Lonsdale leggings from Sports Direct. Invest in a couple of good pieces. Take a trip to Nike Town, get some inspo, buy it cheaper online. The expensive stuff has a degree of science behind it and will keep you warm/cool/won't ride up/down. Plus you'll look good which motivates you to work out more.
Wear said gym kit as much as you can possibly get away with. It makes your butt look great.
Make like a star. The celeb fitness scene is off the chain and you only need to turn to insta for a spot of inspo. The lithe, tanned, toned vibes of Millie Macintosh, Emily Skyes and Jen Selter are awesome role models, sporting the 'strong not skinny' mantra and generally kicking ass. Our current fave is Em Furey, gf of celeb trainer Bradley Simmonds and fitness babe. Her page is full of videos that are simple to recreate and don't need super expensive equipment or gym. Warning: you will get jel of her abs (channel that envy into your plank).
Don't

Become the person that talks about what they did at the gym, to anyone who will listen. I am that dick. I regularly watch my darling bf glaze over as I follow him around our flat, listing out how far I ran on the treadmill and how many reps of squats I managed. As surprising as it may sound, most people don't give a monkeys. They think you sound like a smug prick. Save it for your PT, gym buddy or mum.
Overdo the fluro. Keep it classy ladies.
Think this is just for vanity. This is your health. You will have oodles of energy. You will be happier. You will live longer.
And finally

Don't forget that you are totally badass and that last mile/burpee/press up/crunch is NEVER as painful as you think and ALWAYS worth it in the end.
Elsie x",
  image: "http://cleanbeautyco.com/wp-content/uploads/2015/05/BFI_Shadow_rectangle_1600-1024x731-825x510.jpg"
)

BlogEntry.create(
  title: "My Clean Routine" ,
  introduction_text: "Afternoon CBCo-ers. We’ve had a really exciting few weeks at CBCo HQ. We’ve had so much interest in what we do, so we’re working on some interesting partnerships, workshops and some promotional pieces. Stay tuned!" ,
  content: "I thought I would share my daily routine with you. Over the last few months, I’ve been slowly revamping and replacing what I use day to day. It’s a money and time investment, so I started slowly swapping out things as I finished products. We know it’s not realistic to just do a big overhaul. I have a mix of homemade and store bought, some of the products available these days are too good not to try. And the list keeps growing!

I’ve linked to the sources of most products via Love Lula, which is a great natural beauty retailer and gives you a sa-weet 15% discount on your first purchase.

Cleansing –

Daily I use Supergoo, our delightful foaming cleanser made of Rosehip, Frankincense and Vitamin E. When I need a good scrub, I reach for our sugar and jojoba bead face scrub, Sweet Pearl Scrub which exfoliates without covering my face in plastic. In Winter, my skin gets ridiculously dry, so I opt for Dr Hauschka's Cleansing Milk to keep it nourished.

Toning –

Rosy Glow all the way, you need nothing more than some organic Damask rose water with a few drops of your favourite essential oil. I wouldn’t waste my money on expensive toners.

Moisturiser –

I mix between a moisturiser and face oil depending on how my skin is feeling. For a light touch in the morning, I love our Errrday Face Serum. It absorbs so quickly and the tea tree oil gives a good zing in the morning. For a heavier cream, I'm loving Pai's Hydrating Day Cream made of avocado and jojoba.

Shampoo & Conditioner –

I’m digging Sukin Organics at the moment from Australia, I am using their protein shampoo and conditioner. I have really thin, whispy hair and it gives it a bit of depth that I so desperately need.

Hair Serum –

Post shampooing, I use Rahua's Finishing Treatment. This stuff is glorious, and you only need a tiny dab, so it lasts for ages. If I’m looking for a deep nourishing treatment, I’ll pile on our Nuthead and leave it overnight, then wash thoroughly in the morning. Being an avid swimmer, I always use our strengthening protector, Swim Cap to fight against the pool chemicals.

Shower –

Fuss-Free all the way. This is hands down my favourite product, and leaves your skin delightfully soft without having to moisturise when you get out of the shower. As a shower gel, I use Lavera Lavender Shower Gel which has a lovely, fresh fragrance and is foaming, so feels like a good clean. When I need a good body scrub, I use my dry brush and our coffee scrub Zest Espresso to help banish the pesky lumps and bumps.

And there you have it! Nothing too complicated, but covers my routine head to toe. My hair in particular is loving the change. I’ve really suffered from split ends, breakages and general fly-away whispiness. Since using clean products with real nutrients, my hair has gotten thicker, healthier and full bodied. This for me, is like a dream.

Dominika x",
  image: "http://cleanbeautyco.com/wp-content/uploads/2015/06/FullSizeRender-825x510.jpg"
)

BlogEntry.create(
  title: "Argan: Morocco’s Natural Beauty Superstar",
  introduction_text: "As you’ve probably seen from our incessant ‘gramming, CBCo have just been on tour to Morocco. Whilst it was predominantly a trip for pleasure (to get tan and krunk), we always have our clean beauty radar switched on and so couldn’t resist checking out what North Africa had to offer. And we certainly weren’t disappointed.
" ,
  content: "The road between Marrakech and Essauoira, a coastal town recently voted one of The Guardian’s places to visit in 2015, is pretty desolate. Then, two things happened. Firstly, we drove passed goats in trees. Goats in trees. We stopped to pet them. There was much holding of baby goats and many delighted squeals.
  Secondly, the Argan oil farms appeared. That’s right! Argan oil, or Morocco’s ‘liquid gold’ as it's fondly referred to, the bad ass ingredient that’s become widely known in the past few years as a miracle worker for skin and hair. Argan is a kernel found on trees that grow in abundance in and around Essaouira. It’s extracted using an age-old process that takes the kernel through to nut and finally oil. We were shown this by the all-female cooperative who run the farm that we stopped at. Unlike the high street versions that you find, the oil produced and sold on the farms is 100% pure and organic. It’s not mixed with other oils and the process doesn’t involve any chemicals.

  So, why is Argan Oil so great, and why should you care if it's pure?

  Your Hair: Argan is the rockstar of all hair oils. It contains Vitamin E which promotes hydration. It’s high in Linoleic Acid, an essential fatty acid that your body is unable to produce. This has water retentive properties which means it will seal in moisture and goodness, so especially great for dry or undernourished hair. It is also lighter than oils such as olive and avocado so will leave behind a shine without being greasy.

  The likes of L’Oreal and Moroccan Oil have cottoned on to Argan’s superstar powers and you regularly see it advertised as the key ingredient in many hair products. Sadly, the truth is that you’re being conned (sorry dudes). Shockingly Moroccan Oil only contains a small percentage of Argan. The first three ingredients of this “oil” are actually forms of silicone. Bad news for your wallet as you’re paying premium for the much cheaper ingredients it’s being mixed with. Even worse news for your hair as you’re essentially coating it in rubber (it also rates a 10/10 on Think Dirty as it contains D&C Red-17 a colorant that has been warned to be carcinogenic).

  Your Skin: Argan oil is also a great lightweight moisturiser for face and body. It’s main fatty acid is Oleic Acid, an Omega 9 that has anti-inflammatory properties which means it’s idal for puffy skin or tired skin. It’s super moisturising but interestingly regulates the Sebum balance of your skin, meaning it can be used by people with oily skin and is also great for acne sufferers.

  Your Belly: the Moroccans use Argan oil to cook with too, and it tastes really great. The nuts are roasted before they’re ground into oil which gives it a wonderful salty taste. It was served up with our fresh breads and salads but can also be used to cook with and is extremely good for you.

  We’re guessing you’re just about ready to hop on the next plane to Essaouira to stock up on pure Argan? Wait up! We have a Plan B that might be slightly easier. You can buy 100% pure and organic Argan oil here:

  Amazon
  Truly Moroccan
  Pure Argan Oil
  Holland & Barrett

  However, we highly recommend a trip to Morocco to experience Essaouira; we fell in love with its chic and stylish atmosphere, beautiful beach and friendly locals.

  Elsie x",
  image: "http://cleanbeautyco.com/wp-content/uploads/2015/07/image1-825x510.jpg"
)

BlogEntry.create(
  title: "Clean Accessories",
  introduction_text: "We've been loving our accessories of late, there’s so much potential when you start looking to nature to help with your skincare routine. We are definitely of the mind-set less is not more, and love having loads of tools at our disposal to make ourselves spic and span from the top down! Here is a lowdown of some of the cool utensils you can get from around the world.",
  content: "Konjac Sponge

If there’s one item that is at the top of our recommendation list, it’s the almighty Konjac! The Konjac potato is a native Asian plant, found at high altitudes in Northern Asian. The plant has been used in China, Japan and Korea as a medicine, diet aid and beauty product for over a century. The sponge was originally created to cleanse delicate baby skin, but has now become an environmentally safe way to cleanse the skin. It is PH-neutral and high in anti-oxidising minerals, helping to stimulate blood flow and eliminate grime. Check out UK based the Konjac Sponge Company who stock a wonderful range of sponges for every occasion!

Eco by Sonya Exfoliating Glove

This is hands down the best exfoliating glove I’ve ever used. Chuck those rotten plastic ones you get from Boots. For a deep scrub to remove dead and dry skin, particularly before a tan, there’s only one glove I would slip on! The glove is made of natural fibres and is abrasive enough to really get the blood flowing all over. Side effects include soft skin, even skin tone, reduction in cellulite, and no harm to the environment. Naturally Wright has started importing this brand from Australia, so check out their site for the full range of products. Don't get me started on how great the Himalayan Salt Scrub is.

Muslin Cloth

Used with cleanser, this super-fine muslin cloth helps to remove make-up and impurities as it gently exfoliates the skin. Make sure you get unbleached, 100% organic cotton. I’m loving Pai’s cloth, it has a good price point and is made of great materials. I like it to be a bit more course to get the exfoliation. This can be ordered via Naturisimo.

Jade Facial Roller

This facial roller is made of pure Jade, a cleansing stone used in Chinese medicine for centuries to aid the body's filtration organs and lymph system to expel toxins. The original, medium sized roller is designed to use around the face and neck area to aid lymph drainage and blood flow, eliminating puffiness, toning facial muscles and plumping out wrinkles. It is also said that regular use minimises spots around the chin and jawline caused by toxin build-up. I recently got one and am really loving it! Jade rollers can be bought from Cult Beauty.

Natural Hairbrush

Moving away from plastic silicon hairbrushes, I’ve really noticed a different in the shine and strength of my hair. I use this brush made of wild boar bristle and beech, which penetrates the hair follicle, cleansing the hair. The bristles also gently massage the scalp, simulating hair growth and boosting condition. I got mine from Content Beauty #winning.

Silk glove

Rubbing your dry face with a silk glove is said to replace chemical peeling in a natural way. It smooths the skin and reduces the signs of aging. It simulates the epidermin to general new cells and removes old surface cells. It also helps the active penetration of the ingredients of any treatment product. Natural, healthy and sustainable PH-neutral and hypoallergenic silk has a skin-like protein structure and anti-bacterial properties. I get mine from Amazon.

Love to all our CBCo-ers out there!

Dominika x" ,
  image: "http://cleanbeautyco.com/wp-content/uploads/2015/07/konjac_face-825x234.jpg"
)

BlogEntry.create(
  title: "Lucie's Juice - The Super Skin Smoothie You Need To Try",
  introduction_text: "Gorgeous skin and hair comes not only from a squeaky clean beauty routine but also from a wholesome and nutritious diet. Certain foods have a direct link to the health and vitality of your skin and hair. Now we're in no way experts, so we asked the wonderful Lucie at The 9to5 Foodie to concoct a recipe that'll get our complexions glowing, even on the greyest of London days." ,
  content: "It's hard to know where to start with food blogs, as the array of tools and ingredients needed can be pretty daunting, but Lucie makes healthy eating incredibly easy and designed to fit into busy lives. She focuses on gluten and sugar-free recipes that are fun, simple and bloody delicious (our absolute fave is the Healthy 'Dairy Milk').

If you find fad and craze diets ineffective and a bit stressful, you'll love Lucie's site as it focuses on small and manageable changes and really great food!  She also bears in mind that most of us work crazy hours and just don't have the time to get home every night and cook a vat of vegan, gluten-free curry from scratch,  so has lots of great tips on how to prepare for the week and save time. The idea behind her recipes is to improve energy levels, skin, hair and general health rather than lose loads of weight really quickly (then put it all back on again). It's so refreshing not having to give up all the scrummy stuff!

So here it is! Made especially for us (and you) we give you Lucie's Juice. This super skin smoothie has it ALL.

Lucie's Juice

Half an avocado

Half cup of chopped cucumber

Juice of half a Lemon

1 tbsp Chia Seeds

1 tbsp coconut oil

Third cup Mango

Small handful Spinach

1 cup almond milk

Thoroughly wash all of your fruit and veg. Place in a blender and blend until smooth.This can be made the night before and kept in an airtight container in the fridge so you can enjoy for breakfast the next day.

Why this smoothie rocks:

Cucumber is one of the most hydrating foods you can find whilst the avocado contains Omega 9 fatty acids that help with the regeneration of skin. The cheeky chia seeds are an anti-oxidant, mango contains beta-carotene which will help to slow skin ageing and the saturated fats in coconut oil will give a youthful plump. 

Spinach contains a crazy amount of vitamins including folate which aids DNA repair and so helps skin heal from everyday wear and tear. And finally our beloved almond milk is incredibly high in Vitamin E (which your body isn't able to produce), acting as great sun damage protector.

You can read more about Lucie and her recipes here http://www.the9to5foodie.co.uk/ Enjoy!

Elsie x" ,
  image: "http://cleanbeautyco.com/wp-content/uploads/2015/07/Screen-Shot-2015-07-27-at-20.37.58-636x510.png"
)

BlogEntry.create(
  title: "CBCo’s Essentially Essential Oils" ,
  introduction_text: "At CBCo, we love essential oils. We love the smell, their potency and their healing qualities. Including essential oils in cosmetics isn’t a necessity and safety is key when dealing with their precious and delicate nature. Each oil has it’s own particular qualities that must be researched before use. Many are too potent for direct contact with the skin, citrus oils can react in the sunlight and cause colour pigmentation and some aren’t safe to use while pregnant. We do our own research as best as is available before using any oils and always test them on ourselves. We have detailed our favourite oils to use in everyday products and why we use them.",
  content: "Lavender - is the gentlest of the oils. It relaxing scent and properties mean it is best applied before bed for a restful sleep. It is also great post-exercise, to soothe tired muscles and relax tight joints. We love a Well Earned Soak using epsom salts and lavender.

Frankincense - is a skin relaxant and helps to soothe away fine lines. It also is excellent at rejuvenating the skin, so it great to cell renewal and anti-ageing. We use this in our face oils and our foaming cleanser Supergoo.

Patchouli - this oil is a favourite for our lads. It’s woody, musty scent is a perfect spicy masculine fragrance, and it hydrates bristly hair and dry, chapped skin, making it our superstar in our Beard Juice.

Rose - has a lovely, uplifting floral scent that has been used in skincare for thousands of years. It has stimulating qualities, aiding in renewal and healing. Great for post-acne scarring, and dry mature skin. We love to add a few drops into our Rosy Glow toner for a daily dose of the nurturing rose.

Helichrysum - otherwise known as Immortelle, this plant is renowned for it’s bright flowers that never fade. This oil helps balance the enzymes in the skin to encourage cell renewal, landing this one a top spot in the anti-ageing category. Check it out in Anti-Ageing.

Tea Tree - antiseptic and astringent, Tea Tree is great for healing and clearing problem skin. It stimulates sebum production, levelling out the skins natural oils. Add this to any face serum for skin that needs a good cleanse from daily pollutants, like our Errrday.

Grapefruit - is toning and firming for the skin. It’s expressed from the skin of the fruit, so has that great zesty scent. The rockstar in our Zest Espresso, this oil and ground coffee is perfect to combat pesky cellulite and skin saggyness.

Happy concocting!

Dominika x",
  image: "http://cleanbeautyco.com/wp-content/uploads/2015/08/essential-oils-825x510.jpg"
)

BlogEntry.create(
  title: "Organic Beauty Week" ,
  introduction_text: "It’s Organic Beauty Week and we’re celebrating. It’s an important milestone for our sometimes niche industry that we can recognise the value of being organic in our beauty regimes, as food is often taking the limelight. We are what we eat indeed, but we are also what we lather all over our beautiful bodies.",
  content: "We’ve collaborated with Content Beauty & Wellbeing for a special Organic Beauty Week recipe and a peep into our toiletries bag to see what we’re using now. If you haven’t heard of Content, check out their site or our stockists page. We’re spoilt in London that we have a store and a beacon of knowledge within reach.
  Content’s Fuss Free

  We have re-jazzed our classic recipe for Content customers. We know these healthy bunnies lead hectic lives, so we’ve developed a super special version designed to relax and soothe tired muscles, perfect for post-Pilates or post-yoga class. In true Fuss-Free fashion, you’ll walk out of the shower smoother than a baby’s behind, but also smelling like a bunch of flowers.

  Ingredients

  50g Essence of Eden Coconut Oil
  10ml Trilogy Rosehip Oil
  10ml MV Organic Skincare Pure Jojoba Oil
  5 Drops Lavender Essential Oil

  Method: Melt down the coconut oil in a bain-marie and blend in the other oils, leave in the fridge to reset. Use in-shower. Fuss-free can be used for anything from healing eczema, shaving cream, spray tan prolonger, or general skin-feels-like-baby’s-bum softness.

  Shelf Life: Guaranteed to use it all before it could go off. But 6 months.
  What I’m Using Now

  We reviewed our favourite Content products currently residing in our bathrooms. Head over to the blog to see what we’ve got to say about Rahua Shampoo & Conditioner, Absolution Cleanser, Illa Lipstick, Dr Bronner’s Body Wash and RMS Concealer." ,
  image: "http://cleanbeautyco.com/wp-content/uploads/2015/09/BlogHeader21-825x336.jpg"
)

BlogEntry.create(
  title: "Work hard, Spray Hard",
  introduction_text: "When I went green, I was nervous about two things:

How will I replace the brand of mascara I’ve been using for the last 10 years that make my eyelashes look like sweeping feathers?
How will I find anything that will keep my unruly locks in place like L’Oreal Elnett does?",
  content: "Number one is an ongoing battle. There is a mascara out there for me - I know there is - it’s just taking me a while to find it. As RMS Beauty so rightfully commented on our Insta feed recently - ‘Mascara is like a boyfriend. Really hard to find the perfect one’ (disclaimer: I HAVE found the perfect boyfriend - thought I’d throw that out there before he goes and gets an inadequacy complex). Will keep you guys posted on any progressions with this but the current state of play is Elsie: 0 - Panda-eyes: 3.

Whilst I slowly make my way through every mascara that the green beauty world has to offer, I am at least safe in the knowledge that i’ll be doing it with great hair. And that is because I’ve recently discovered Rahua Voluminous Hairspray, thus solving the second part of my green beauty dilemma. 

You see, I’m a bit of a hairspray addict. My hair can lack volume so my tendency is to pour Elnett on my head continuously, until every last strand is in perfect formation. I even use the stuff on my eyebrows. Yes, you read that right. My eyebrows. I have a weird thing about big eyebrows, think Delevingne, and find hairspray the best way to keep my owl brows in place.

I’ve now switched all of my beauty and cosmetic products to natural, non-toxic alternatives but hairspray I was really reluctant to do, mainly because I simply didn’t believe that there could be anything from natural origin that would have the hold power that good old L’Oreal does.

But that got me thinking…what exactly is in the stuff for it to be that powerful? It’s certainly not natural, you can tell that by the smell alone, so what chemicals do they include that literally glue your hair to the side of your head?

I thought a little scaremongering might finally convince me to make the switch so I decided to find out.

Think Dirty lists my choice of hairspray -  L'Oreal Elnett Volume Hold - as a 9 out of 10 for toxicity. The main offender is that sneaky, mysterious, deadly culprit - Fragrance. The word ‘fragrance’ or ‘parfum’ represents an undisclosed list of ingredients used to perfume a product. Yes that’s right UNDISCLOSED. Companies do not have to list the chemicals that make up their fragrance, which, quite frankly, is shocking. According to the Skin Deep database, 'Fragrance mixes have been associated with allergies, dermatitis, respiratory distress and potential effects on the reproductive system.’ YIKES. 

The horrors of fragrance aside, I continued to explore my Elnett bottle and found a dizzying amount of ingredients - most of which I couldn’t pronounce - HYDROXYCITRONELLAL, AMYLCINNAMALDEHYDE, COUMARIN, LILIAL. Skin Deep cites that most of these are used for EVEN MORE fragrance proposes. And they pretty much all come up with some kind of health hazard - mainly listed as a 'known human immune system toxicant or allergen'. Doesn’t sound great to me. More worryingly, they are all ‘safe for use only within the recommended use or concentration limits'. Which is fine, as L’Oreal (by law) have to stick to the guideline quantity. But what if these ingredients are also in my other haircare products? My shampoo? My conditioner? Or my skincare products - my face wash, my moisturiser? Or even my cleaning products. All things I use regularly. That then increases my exposure to these chemicals and suddenly I’m no longer using them in the recommended limits. There’s no way of controlling that.

I don’t want to use something that’s only safe in small quantities. I want ingredients that are safe, full stop.

Enter Rahua, my knight in shining armour. It’s organic, 100% natural and alcohol-free, made up of a combination of oils and waters that both nourish hair as well as keeping it in place! It even contains citrus juices that help to break down grime so will prolong time between washes. I find it best not to apply too close to my roots as it has the tendency to look a little greasy but other than that, I’m extremely happy with it.

Best of all - it scores a 2 on Think Dirty! No sneaky fragrance ingredients, no restriction of dosage. It’s clean and honest and will keep my eyebrows firmly in place.

We buy our Rahua from Content Beauty & Wellbeing.

Elsie x" ,
  image: "http://cleanbeautyco.com/wp-content/uploads/2015/09/Storemags-Free-Magazines-Download-in-PDF-for-iPad-PC-825x510.jpg"
)

BlogEntry.create(
  title: "A Question of Sweat",
  introduction_text: "Some bits of this clean beauty lark are much easier than others. Switching your makeup is scary but you can easily wipe off a bad foundation and get on with your day, or reapply when necessary. If a conditioner hasn't quite done the trick then there's always a spritz of dry shampoo to keep you going. Deodorant, however, is a little different. Because let's face it, you really don't want to stink. Your colleagues/boyfriend/gal pal/gym buddy/mum also really don't want you to stink.",
  content: "At CBCo HQ, we've been on a mission to find the perfect deodorant and rather like the perfect man, we were hoping to debunk the myth. We tried, like really tried, and here are the results. Before we go into the details though, there are two things about natural deodorant that we think you should know:

1. The difference between deodorant and anti-perspirant. The clue is really in the name: deODORant, anti-PERSPIRant. One stops you smelling, one stops you sweating altogether. For years we've been using the latter, because obviously the dream is not to sweat, right? WRONG. In the image-conscious, aesthetically-obsessed society that we live in today, we have been conditioned to believe that sweating is undesirable, which is actually a bit mental when you think about it. Sweating is your body expelling toxins. And we want to try and stop this. That’s like saying we should try not to pee or blow our nose. Neither are particularly healthy. With that in mind then, you’re unlikely to find a natural anti-perspirant, because it’s not natural to not sweat. And that’s the part that’s difficult to get your head around at first. It’s ok to sweat guys. it’s just when you start smelling that it becomes an issue and that’s mainly because it’s unpleasant for yourself (and potentially those around you).

2. Natural deodorant comes in all shapes and sizes and often has application methods that you may not be used to. They don’t exist in an easy-to-apply aerosol but instead in all forms of liquids, powders, creams and rubs. I even bought one recently that was essentially a giant stick of salt that you ran under warm water then rubbed on your pits. So, you need to be open minded when trying natural deodorants. They may not come in the most convenient of forms but bear with them, get used to them, and we promise you won’t look back.

Eco by Sonya Deodorant
This baby wasn't cheap. At £16.80 a pop, I was expecting something pretty glorious. The deodorant lasted well into the day and kept me smelling like a tropical holiday. The size was good and came on clear, so no awkward marks on clothes. My grievances were really in the consistency of the actual product; because it was a pump spray, it was difficult to control the amount, and I often ended up with liquid streaming down my pits. It also took bloody ages to dry, so I spent a good five minutes waving my hands in the air (like I just didn't care) so it wasn't dripping down my arm anymore. Luckily my boyfriend didn't think I was an absolute loon because I've also stripped him of his Lynx, so we were dancing together. The nozzle also eventually got blocked because the coconut oil it seemed congealed, not allowing the spray to work. I ended up having to throw it away before finishing, which is tres annoying as it was pricey.

Green People Roll On
Oh, we're getting back onto familiar territory with the whole roll contraption. Without alcohol or aluminium, this smells refreshingly of orange and vanilla. The consistency was great, really light and dried fast, without leaving marks or dripping. However, it just didn't cut it. I run around all day, I go to the gym, I cycle and I'm usually dancing in my seat. I need a deodorant that is going to block any nasty odours seeing as I'm giving perfume a rest too (anyone want to recommend a non-toxic brand?) I really need a bit of a fragranced shield. When push came to shove, the deo just evaporated too quickly.

The Natural Deo Co’s Balm
True to natural deo form, this stuff comes in a little pot and at first sight looks like coconut oil, which is probably because coconut oil is one of its key ingredients. The directions say to rub onto clean, dry armpits and you’re ready to go. The texture is pretty smooth but it also contains sodium bicarbonate, which gives it a slightly gritty feel. It sounds weird but this actually makes it feel like it’s working, stops it feeling too greasy and means you don’t have to wait for it to dry. The scent is delightful - citrusy, light, delicate and in no way overbearing. Having tried and failed with a number of brands, I wanted to put this stuff to the ultimate test. So, one Monday evening I went to an hour hot yoga class then cycled for half an hour to play an hour of netball. Hot yoga has the potential to get pretty stinky but followed by a netball match, I had zero faith that this balm would hold up. So to my UTTER SHOCK I found myself smelling extremely fresh when the final whistle blew. It’s been put to multiple tests since - the tube, running, long cycle rides, hot climates and I have to say it’s great. Whilst it allows you to sweat, the combination of ingredients mean you just don’t smell.

Making your own deodorant at home is also becoming increasingly popular. This nice recipe keeps the cost down and allows you to scent it as you wish. Get a glass jar and pop it in your gym bag.

Dominika & Elsie x

Header photo credit: www.naturiabeauty.com" ,
  image: "http://cleanbeautyco.com/wp-content/uploads/2015/10/The-Natural-Deodorant-Co-Clean-Deodorant-Balm-825x498.png"
)

BlogEntry.create(
  title: "Oh Hai Halloween!",
  introduction_text: "Nothing quite cushions the chilly embrace of Autumn than HALLOWEEN - the only time of year where quite literally any fancy dress is acceptable. Simply add a touch of mortality and voila! What have you come as? Oh, I’m a dead sexy nurse! Zombie mermaid! Possessed Cinderella! And if all else fails just go as a black cat, like the rest of the 18-24 female population. ",
  content: "We are so psyched to get our ghoul on this weekend and the first place we’ll start is by spooking up our make up collection. Halloween is such a great excuse to be a little more experimental with your face and try out colours and techniques that you’d ordinarily be a little scared (see what we did there) to explore. We’re thinking rich, dark purples, electric blues, blood red lips, monstrously long lashes and deathly pale complexions.

Needless to say, we’ll be doing the whole thing the natural way…

EYES

RMS Eye Polish in Karma. Use for that perfect zombie look by hollowing out the eye both underneath and on the lid. The idea is to look as though you’ve not slept for the last few years.

W3ll People Capitalist Eyebrow Powder in Matte Espresso. Shapes and structures frighteningly good brows.

Jane Iredale Purelash Lash Extender. Layer on thick for a spider-lash look and for extra effect, smudge down over cheekbones.

FACE

Une Cosmetics Youth Serum Foundation. This stuff usually gives a youthful and dewy glow which is the exact opposite to the deathly look that you’re aiming for. Mix with a lighter concealer or small amount of pale eyeshdow to achieve that just stepped out of the morgue look.

W3ll People Elitist eyeshadow Powder in Midnight Twinkle. YES we know it’s an eyeshadow but bear with us here…a dark eyeshadow is perfect for achieving that skeletal, sharp edged look. Simply apply just underneath your cheekbones as you would a bronzer. Makes you look like a supermodel (a dead supermodel).

LIPS

Just apply loads and loads and loads of Lily Lilo Natural Lipstick in Berry Crush. Smudges outside of your lips? Perfect - looks just like dried blood.

NAILS

Intensae Nail Lacquer in Mantra. This. Stuff. Rocks. A deep, gothic black with a slight hint of blue  that’ll have your talons looking like they’ve been dead for days.

Have fun everyone! And to finish, here are some super cute halloween dogs who will 100% have better outfits than us." ,
  image: "http://cleanbeautyco.com/wp-content/uploads/2015/10/8c8c8896de66b50c892cbc8e0764bd98-476x510.jpg"
)


