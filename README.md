আপনাকে অনেক অনেক অভিনন্দন, কোর্স এর শেষ এসাইনমেন্ট এ আপনি পৌঁছে গিয়েছেন। আশা করি, রিয়্যাক্ট এবং নেক্সট.জেএস সম্পর্কে আপনাদের অনেক ভাল একটি ধারণা হয়েছে । তাই, এই কোর্সে যা যা দেখানো হয়েছে, তার উপর ভিত্তি করে আপনাদের জন্যে এই এসাইনমেন্ট তৈরি করা হয়েছে। এই এসাইনমেন্ট এ Frontend এর কোড দিয়ে দেয়া হয়েছে, আপনাদের মডিউলে দেখানো পদ্ধতিতে Mongo Atlas ডেটাবেজ এবং API তৈরি করে পুরো এসাইনমেন্ট টি করতে হবে ।

## এসাইনমেন্টে আপনাকে যা যা করতে হবেঃ

- ইউজার Authentication Implement করতে হবে । এক্ষেত্রে Access Token এবং Refresh Token যথাযথ ভাবে কাজ করতে পারতে হবে ।

- আমাদের দেয়া login.html টেমপ্লেট ব্যবহার করে ইউজার কে লগইন করাতে হবে, অনুরূপ টেমপ্লেট বা স্ট্রাকচার দিয়ে আপনাদের রেজিস্ট্রেশন ফর্ম বানিয়ে নিতে হবে যেন নতুন ইউজার রেজিস্টার করতে পারে ।

- লগইন এবং রেজিস্ট্রেশন এর ক্ষেত্রে "Continue with Google" অর্থাৎ সোশাল লগিন ব্যবহার করে যেন ইউজার তাদের একাউন্টে লগইন এবং রেজিস্টার করতে হবে ।

- লগইন এবং রেজিস্ট্রেশনের ক্ষেত্রে Parallel Routing এবং Intercepting Routing ইমপ্লিমেন্ট করতে হবে, যেন নেভিগেশন করে লগইন বা রেজিস্ট্রেশন এ ক্লিক করলে মোডাল ওপেন হয় আর পেজ রিলোড করলে সেটি যেন একটি আলাদা পেজ আকারে দেখা যায় ।

- হোম পেজ অর্থাৎ index.html পেজের প্রোপার্টির কার্ড গুলো, ডেটাবেজ থেকে নিয়ে এসে দেখাতে হবে, এই পেজ সার্ভার সাইড এ রেন্ডার হয়ে আসবে ।

- হোম পেজে এক সাথে সর্বোচ্চ ৮ টি কার্ড লোড হবে, ডেটাবেজে ৮ এর বেশি প্রোপার্টি থাকলে পেজিনেশন করে দেখাবে ।

- হোম পেজের প্রোপার্টির কার্ডে এ প্রোপার্টির নাম, ঠিকানা, প্রতিরাতে খরচ, কত গুলো রুম ফাকা আছে, প্রোপার্টির ছবি, এবং এভারেজ রেটিং দেখাতে হবে ।

- প্রোপার্টি কার্ডে ক্লিক করলে, সেই প্রোপার্টির ডিটেইলস পেজে নিয়ে যেতে হবে ।

- প্রোপার্টির ডিটেইলস পেজে প্রোপার্টির নাম, এভারেজ রেটিং, কতগুলো রেটিং/রিভিউ রয়েছে তার সংখ্যা, প্রোপার্টির ঠিকানা, ৫ টি ছবি সহ বেশ কিছু তথ্য দেখাতে হবে । ডিটেইলস পেজে "Entire villa hosted by Sarah" দিয়ে বোঝানো হচ্ছে, এই প্রোপার্টিটি কে তৈরি করেছে ।

- প্রোপার্টির ডিটেইলস পেজের সকল তথ্য আপনাকে ডেটাবেজ থেকে নিয়ে এসে দেখাতে হবে । এবং এই পেজ ও সার্ভার থেকে রেন্ডার করে দেখাতে হবে । সেই সাথে এই পেজের Meta Information গুলো সঠিক ভাবে আপডেটেড থাকতে হবে, যেন যেকোনো ডিটেইলস পেজের লিংক সোশ্যাল মিডিয়াতে শেয়ার করলে, সেই পেজের সঠিক তথ্য সেখানে দেখা যায়।

- প্রোপার্টির ডিটেইলস পেজের ডান পাশের কলামে, "Check in" এবং "Check Out" নামে একটি ইনপুট ফিল্ড রয়েছে। সেখানে ক্লিক করলে আপনাকে ক্যালেন্ডার বা ডেট পিকার দেখাতে হবে । এজন্যে NPM লাইব্রেরি থেকে যেকোনো লাইব্রেরি ব্যবহার করতে হবে । Input এর Default ইনপুট ফিল্ড ব্যবহার করলে হবে না ।

- প্রোপার্টির ডিটেইলস পেজের ডান পাশের কলামের ফর্মে সব তথ্য দিয়ে "Reserve" বাটনে ক্লিক করলে "paymentProcess.html" পেজে নিয়ে যেতে হবে ।

- প্রোপার্টির ডিটেইলস পেজে "Reviews" সেকশনে, সেই প্রোপার্টির রিভিউ গুলো নিয়ে এসে দেখাতে হবে। সেই সাথে Average Ratings, এবং মোট কত গুলো রিভিউ রয়েছে এই প্রোপার্টির সেটিও দেখাতে হবে । অর্থাৎ 5 হচ্ছে এভারেজ রেটিংস এবং "2 Reviews" হচ্ছে, মোট কত গুলো রিভিউ রয়েছে সেটি।

- যে কেউ একটি প্রোপার্টির জন্য শুধুমাত্র একটি রিভিউ দিতে পারবে। যদি একজন ব্যক্তি কোনো প্রোপার্টিতে রিভিউ দিয়ে থাকে, তাহলে তার জন্য "Write a Review" বাটনটি আর দেখা যাবে না। একইসঙ্গে, প্রোপার্টির মালিক কখনোই নিজের প্রোপার্টি বা হোটেল রুমের জন্য রিভিউ দিতে পারবেন না। "Write a Review" বাটনটি কেবল তাদের জন্য দৃশ্যমান হবে, যারা সেই প্রোপার্টিটি রিজার্ভ বা কিনেছেন।

- "Write a Review" বাটনে ক্লিক করলে, সুন্দর একটি পপ-আপ ডায়ালগ আসবে (ReviewModal.html) । সেই ডায়ালগ এ Overall Rating এবং ইউজারের রিভিউ দিয়ে সাবমিট করলে নতুন একটি রিভিউ তৈরি হয়ে যাবে ।

- ইউজার তার নিজের দেয়া রিভিউ ডিলেট করতে পারবে, অর্থাৎ রিভিউ এর মধ্যে আপনাকে একটি ডিলেট বাটন বসাতে হবে, যেখানে ক্লিক করলে ইউজার তার রিভিউ ডিলেট করতে পারবে ।

- পেমেন্ট প্রসেস পেজে (paymentProcess.html) বাম পাশের কলামে, ইউজার যেই তারিখ সিলেক্ট করেছে, সেই তারিখ দেখাবে, যত জন গেস্ট সিলেক্ট করেছে, তার সংখ্যাও দেখাবে এবং পেমেন্ট করার জন্যে ফর্ম থাকবে, সেই ফর্ম ফিল-আপ করে "Request to Book" বাটনে ক্লিক করলে "success.html" পেজে নিয়ে যাবে ।

- পেমেন্ট প্রসেস পেজে ইউজার চাইলে "Edit" বাটনে ক্লিক করে তারিখ এবং অতিথির সংখ্যা পরিবর্তন করতে পারবেন। "Edit" বাটনে ক্লিক করার পর কীভাবে ইউজার তারিখ ও অতিথির সংখ্যা সহজে পরিবর্তন করবেন, তা আপনার সৃজনশীলতার ওপর নির্ভর করবে। এটি এমনভাবে ডিজাইন করতে হবে, যাতে পুরো প্রক্রিয়াটি সহজ ও ইউজার-ফ্রেন্ডলি হয়।

- পেমেন্ট প্রসেস পেজ থেকে ইউজার চেক-ইন এবং চেক-আউট এর তারিখ পরিবর্তন করলে সে অনুযায়ী ডান পাশে প্রাইজলিস্ট আপডেট হবে ।

- পেমেন্ট প্রসেস পেজের ডান পাশে ইউজার যে রুম সিলেক্ট করেছেন, তার নাম এবং কত রাত থাকার পরিকল্পনা করেছেন, তার ওপর ভিত্তি করে প্রাইস লিস্ট দেখাতে হবে। প্রতিটি ইউজার বা প্রোপার্টির ক্ষেত্রে ক্লিনিং ফি এবং সার্ভিস ফি অপরিবর্তিত থাকবে।

- পেমেন্ট সাকসেস (success.html) পেজে ইউজারকে একটি সাকসেস মেসেজ দেখাতে হবে। সেখানে রিজারভেশন ডিটেইলস এবং পেমেন্ট সামারি স্পষ্টভাবে দেখাতে হবে।

- পেমেন্ট সাকসেস পেজে ইউজারকে "Download Receipt" বাটনটি প্রদর্শন করতে হবে। এই বাটনে ক্লিক করলে ইউজার তার রিজারভেশনের রসিদ PDF ফরম্যাটে ডাউনলোড করতে পারবেন। রসিদটিতে থাকবে - হোটেলের লোগো, গেস্টের নাম, রিজারভেশন ডিটেইলস (যেমন বুক করা রুমের নাম, তারিখ, এবং থাকার রাতের সংখ্যা), পেমেন্ট সামারি (মোট ব্যয়, ক্লিনিং ফি, সার্ভিস ফি ইত্যাদি), ইউজারের বিলিং অ্যাড্রেস, মোট ব্যয়ের পূর্ণ বিবরণ। PDF Generate করতে "PDF-LIB" বা অন্য যেকোনো লাইব্রেরি ব্যবহার করতে পারেন

- ইউজারের রুম রিজার্ভেশন সম্পন্ন হয়ে গেলে, ইউজার কে ইমেইল করে তাকে Receipt এর একটি কপি পাঠিয়ে দিতে হবে ।

- যেকোনো ইউজার নেভিগেশন বার থাকা হ্যাম্বার্গার বাটন এ ক্লিক করলে, একটি পপ-আপ মেনু দেখতে পারবে । যদি ইউজার লগইন করে না থাকে তাহলে সেখানে "Login" , "Signup" নামে দুইটি মেনু দেখতে পারবে । আর যদি লগইন করা থাকে, তাহলে লগইন করা ইউজারে এর ছবি, নাম (গুগলের মত) , এবং এই ৪ টি মেনু দেখতে পারবে - "Create Hotel", "Manage Hotels","Bookings" এবং "Logout" ।

- পপ-আপ মেনু থেকে Create Hotel এ ক্লিক করলে, "Create.html" পেজে নিয়ে যাবে । Create পেজেটি দেখতে পুরোপুরি প্রোপার্টি ডিটেইলস পেজের Layout এর মত । কিন্তু প্রত্যেক Text এর পাশে Pencil এর আইকন দেখতে পারছেন, সেই পেন্সিল এর আইকন এ বা Text এর উপর ক্লিক করলে সেই Text টি Input এ কনভার্ট হবে, সেখানে কাঙ্ক্ষিত তথ্য দিয়ে Save বাটনে ক্লিক করলে Input টি পুনরায় Text এ কনভার্ট হয়ে যাবে । (আপনাদের সুবিধার্থে শুধুমাত্র "Property Name" জাভাস্ক্রিপ্ট দিয়ে করে দেয়া হয়েছে।)

- Create Hotel এ সব তথ্য দিয়ে "Publish" বাটনে ক্লিক করলে সেই প্রোপার্টি পাবলিশ হয়ে যাবে ।

- পপ-আপ মেনু থেকে Manage Hotels এ ক্লিক করলে "manageList.html" পেজে নিয়ে যাবে। সেখানে এই ইউজার কি কি প্রোপার্টি তৈরি করেছে, তার লিস্ট থাকবে। ইউজার চাইলে তার তৈরি করা প্রোপার্টি ডিলেট করে দিতে পারে, আবার চাইলে এডিট করতে পারে।

- Manage Hotels পেজ থেকে কোনো কার্ডের এডিট বাটনে ক্লিক করলে, "Create Hotel" পেজের মত ইন্টারফেস দেখতে পারবে। যেখানে সে তার কাঙ্ক্ষিত তথ্য আপডেট করতে পারবে।

- Manage Hotels পেজ থেকে কোনো কার্ডের ডিলেট বাটনে ক্লিক করলে, সেই হোটেল ডিলেট করার জন্যে একটি এলার্ট দেখাতে হবে, সেই এলার্টে Yes/Confirm করলে প্রোপার্টি ডিলেট হয়ে যাবে ।

- পপ-আপ মেনু থেকে Bookings এ ক্লিক করলে, "bookings.html" পেজ দেখাবে । সেখানে Logged-in ইউজার কোন কোন হোটেল বুক করেছে তার একটি লিস্ট দেখতে পারবে ।

- Bookings থেকে ইউজার, তার বুক করা প্রোপার্টি গুলোর Receipt PDF আকারে ডাউনলোড করতে পারবে ।

- Navbar এ সার্চবার রয়েছে, সেখান থেকে ইউজার প্রোপার্টির টাইটেলের উপরে সার্চ করতে পারবে। সার্চ রেজাল্ট সব সময় index.html পেজে দেখাবে ।

- "Create Hotel", "Manage Hotels" এবং "Bookings" পেজগুলো প্রাইভেট থাকবে। অর্থাৎ, শুধুমাত্র ইউজার লগইন করা অবস্থায় এই পেজগুলোতে অ্যাক্সেস করতে পারবে।

## সামগ্রিক বিধিনিষেধঃ

- MongoDB Atlas এ আপনাদের সব ডেটা রাখতে হবে ।
- পুরো এসাইনমেন্ট এর ব্যাকেন্ড এর ডেটাবেজ ডিজাইন কেমন হবে, সেটিও আপনাকে করতে হবে ।
- এসাইনমেন্ট এ কিছু ক্ষেত্রে Popup/Dialog এর কোনো ডিজাইন দেয়া হয়নি সেটি আপনি পরিবর্তন করতে পারবেন ।
- আপনি চাইলে TypeScript ব্যবহার করতে পারবেন ।
- আপনার প্রয়োজনে আপনি ডিজাইন পরিবর্তন এবং আপডেট করতে পারবেন ।
- আপনি চাইলে রিকুয়ারমেন্টস এর বাহিরে গিয়ে আলাদা কোনো ফিচার এড করতে পারবেন ।
- আপনাকে খেয়াল রাখতে হবে, যেন Github Repository তে আপনার .env ফাইল আপলোড হয়। কোনো কারণে যদি Github Repository .env না থাকে তাহলে সেই এসাইনমেন্ট বাতিল বলে গণ্য হবে ।

## কিভাবে সাবমিট করবেন:

সবচেয়ে সহজে বুঝার জন্য [এই ভিডিওটি](https://learnwithsumit.com/rnext/courses/rnext/how-to-submit-assignments-in-reactive-accelerator-course) দেখে ফেলুন।

এসাইনমেন্টে আপনাকে মাত্র দুইটা জিনিস সাবমিট করতে হবে।

1. **GitHub private repository link:** অবশ্যই সঠিক গিটহাব রিপোজিটরি লিংক দিতে হবে। ভুলে অন্য কোনো লিংক দিলে আপনি এসাইনমেন্টের মার্ক পাবেন না তাই সাবমিট করার আগে নিউ ট্যাবে লিংক ওপেন করে চেক করে নিবেন সঠিক লিংক জমা দিচ্ছেন কিনা।
2. **Live site link:** নেটলিফাইতে বা ভার্সেলে সাইট হোস্ট করে সাইটের লাইভ লিংক দিতে হবে। ভুলে অন্য কোনো লিংক দিলে আপনি এসাইনমেন্টের মার্ক পাবেন না তাই সাবমিট করার আগে নিউ ট্যাবে লিংক ওপেন করে চেক করে নিবেন সঠিক লিংক জমা দিচ্ছেন কিনা। নেটলিফাইতে বা ভার্সেলে কি ভাবে হোস্ট করতে হয় তা আপনি না জানলে [এইখানে ক্লিক](https://learnwithsumit.com/rnext/courses/rnext/how-to-deploy-your-project-to-vercel-free) করে দেখে নিতে পারেন।

**সাবমিট একবারই করতে পারবেন তাই ভালো করে দেখে সাবমিট করবেন।**

## GitHub private repository কিভাবে তৈরি করবেন:

Github Private repositoty তৈরি করতে [এইখানে ক্লিক করুন](https://classroom.github.com/a/0p8bC7DO) অথবা ব্রাউজারে এই লিংকে **https://classroom.github.com/a/0p8bC7DO** ভিজিট করুন। লিংকে যাওয়ার পরে **Accept this assignment** এ ক্লিক করুন। সর্বোচ্চ ১ মিনিট পরে পেইজটি রিলোড দিলে আপনি আপনার রিপোজেটরি লিংক পেয়ে যাবেন। মনে রাখবেন, আপনাকে এই লিংকটি আমাদের প্লাটফর্মে সাবমিট করতে হবে। না বুঝলে উপরে বলা ভিডিও টিউটোরিয়ালটি দেখে নিন।

## এসাইনমেন্ট মার্কস পলিসি:

আপনি নির্ধারিত সময়ে এসাইনমেন্ট জমা দিলে এবং সব কিছু সঠিকভাবে করলে সম্পূর্ণ মার্ক পাবেন। এর পরে জমা দিলে আপনার মার্ক নিচের নিয়মে কাটা যাবে -

1. ডেডলাইনের পরে রিয়্যাক্টিভ এক্সিলারেটর কোর্স এর আর কোনো এসাইনমেন্ট গ্রহণ করা হবে না । অর্থাৎ পূর্বে বাকি থাকা কোনো এসাইনমেন্ট এই তারিখের পরে সাবমিট করতে পারবেন না ।

অবশ্যই কোর্স চলাকালিন সময়ে এসাইনমেন্ট জমা দিতে হবে। কোর্সের ডিউরেশন শেষ হয়ে গেলে তার পরে আপনি এসাইনমেন্টে জমা দিলে এসাইনমেন্টের মার্ক পাবেন না।

## সাবমিট করার পর কোড পরিবর্তন:

আপনি ভেবে নিতে পারেন আপনি ওয়েবসাইটে সঠিক সময়ে এসাইনমেন্ট সাবমিট করে নীরবে পরে গিটহাবে কোড পুশ করতে থাকবেন! আপনার গিটহাবের সর্বশেষ কমিট দেখলেই আমরা বুঝতে পারবো আপনি কখন কোড আপডেট করেছেন। সে অনুযায়ী আমরা আপনার মার্ক কেটে নিবো। তাই এসাইনমেন্ট এর সময় পার হবার পরে আমরা আশা করবো আপনি চালাকি করে আর কোড পুশ করবেন না আপনার রিপোজিটরিতে। এটা করলে আপনার সম্পূর্ণ মার্ক কাটা যেতে পারে।

## এসাইনমেন্ট মার্কস কবে পাবেন:

আমরা সর্বোচ্চ ১৫ কার্যদিবসের ভিতরে এসাইনমেন্টের মার্ক দিয়ে দেওয়ার চেষ্টা করবো। ক্ষেত্র বিশেষে একটু দেরি হতে পারে কারো কারো মার্ক পেতে।
