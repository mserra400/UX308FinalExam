import {
  colour_mix,
  largest_product,
  day_of_the_week,
  pay_raise,
  is_leap
} from './functions.js';

function Question1(){
    return <section>
<br />
<h2>Mixing colours</h2>
<p>colour_mix("red", "blue") == "{colour_mix("red", "blue")}"</p>
<p>colour_mix("green", "blue") == "{colour_mix("green", "blue")}"</p>
<p>colour_mix("red", "green") == "{colour_mix("red", "green")}"</p>
    </section>;
}

function Question2(){
    return <section>
<br />
<h2>Largest product</h2>
<p>largest_product(-4, 15, 70) == "{largest_product(-4, 15, 70)}"</p>
<p>largest_product(2, 6, 4) == "{largest_product(2, 6, 4)}"</p>
<p>largest_product(5.5, 7.8, 6) == "{largest_product(5.5, 7.8, 6)}"</p>
    </section>;
}

function Question3(){
    return <section>
<br />
<h2>Day of the week</h2>
<p>day_of_the_week(4) == "{day_of_the_week(4)}"</p>
<p>day_of_the_week(2) == "{day_of_the_week(2)}"</p>
<p>day_of_the_week(5) == "{day_of_the_week(5)}"</p>
    </section>;
}

function Question4(){
    return <section>
<br />
<h2>Pay raise</h2>
<p>pay_raise("F", 3, 24000) == "{pay_raise('F', 2, 25000)}"</p>
<p>pay_raise("P", 12, 70000) == "{pay_raise('P', 11, 40000)}"</p>
<p>pay_raise("F", 17, 90000) == "{pay_raise('F', 15, 60000)}"</p>
    </section>;
}

function Question5(){
    return <section>
Leap year<br />
<h2>Leap year</h2>
<p>is_leap(2020) == "{is_leap(2020).toString()}"</p>
<p>is_leap(1900) == "{is_leap(1998).toString()}"</p>
<p>is_leap(2000) == "{is_leap(2024).toString()}"</p>
    </section>;
}

export {Question1, Question2, Question3, Question4, Question5}