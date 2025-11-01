/* 
JavaScript Error Example:

Problem 01
Question: যদি কোন লাইনের শেষের সেমিকলন না 
দেওয়া হয় তাহলে কি অ্যারোর দেবে?

Answer:
 যদি কোন লাইনের শেষে সেমিকোলন না দেওয়া হয়
 তাহলে সেটা কোন বড় ভুল না। 
তবে কোডের সুন্দরের জন্য, readability এর জন্য 
সেমিকোলন দেওয়ার সব থেকে ভালো।

যেমন:
const a = 50
console.log(a)

এখানে কোন এরর আসবেনা। 




Problem 02
Question: Reference Error কখন দেবে? 

Answer: আমরা যখন ফাংশন এর ভেতরে বা অন্য
কোন কাজে এমন একটা রেফারেন্স ব্যবহার করি যেটা
আমার কোডের ভিতর এক্সিস্ট করেনা, তখন সে আমাকে
Reference Error দিবে!

যেমন:
const a = 23;
console.log(b);

Uncaught ReferenceError: b is not defined



Problem 03
Question: Sintex Error আর Type Error-এর 
ডিফারেন্স কী?

Answer: Sintex Error তখন ঘটে যখন আমরা
বানানে ভুল করি। অথবা জাবাস্ক্রিপ্টের রিজার্ভ 
কিওয়ার্ড ব্যবহার করি। আর আমরা যখন এমন কিছু
অপারেশন করার চেষ্টা করি যে অপারেশনটা ওই টাইপের
ডেটার জন্য প্রযোজ্য নয়। তখন আমাদেরকে Sintex
Error দেওয়া হয়। 

*/