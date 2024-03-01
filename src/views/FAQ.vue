<template>
    <div class="faq-page">
        <h1 class="faq-header">Frequently Asked Questions</h1>
        <nav class="faq-nav">
            <div class="category-buttons">
                <button v-for="category in categories" :key="category.id" @click="scrollToCategory(category.id)"
                    class="category-btn">
                    {{ category.name }}
                </button>
            </div>
        </nav>
        <div class="faq-content">
            <section v-for="category in categories" :key="category.id" :id="category.id">
                <h2>{{ category.name }}</h2>
                <ul>
                    <li v-for="(faq, index) in category.faqs" :key="index">
                        <h3>{{ faq.question }}</h3>
                        <p>{{ faq.answer }}</p>
                    </li>
                </ul>
            </section>
        </div>
        <footer class="faq-footer">
          Can't find what you're looking for? <a href="contact-us" class="contact-link">Contact us</a>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'FaqPage',
    data() {
        return {
            categories: [
                {
                    id: 'general',
                    name: 'General',
                    faqs: [
                         {
                            "question": "How do I start my math adventure on Quick Math?",
                            "answer": "First off, you'll need to log in! If you don't have an account, ask a grown-up to help you set one up. Just enter your cool explorer name and a secret password, and you're in!"
                        },
                        {
                            "question": "What kind of math missions can I choose from on Quick Math?",
                            "answer": "Oh, we have a whole universe of math missions! You can pick from categories like subtraction (that's taking away numbers), geometrics (shapes and sizes), and lots more. Whatever you're in the mood to tackle, we've got it!"
                        },
                        {
                            "question": "How do I answer the quiz questions on Quick Math?",
                            "answer": "Just read each question carefully, and pick the answer you think is right. Don't worry if you're not sure — it's all about trying your best and learning. You can't learn if you don't make mistakes, right?"
                        },
                        {
                            "question": "What happens when I finish a quiz on Quick Math?",
                            "answer": "Once you've answered all the questions, hit the 'Finish' button to see how you did. You'll get a score that shows how many questions you got right. It's like a treasure chest of points!"
                        },
                        {
                            "question": "Can I try a quiz more than once on Quick Math?",
                            "answer": "Absolutely! If you want to improve your score or just practice more, you can retake any quiz. It's all about getting better and having fun with math."
                        },
                        {
                            "question": "What if I find a question really hard on Quick Math?",
                            "answer": "No problemo! Try the best as you can and take your best guess. Remember, every question is a chance to learn something new. And you can always ask a grown-up or teacher if you're really stuck."
                        },
                        {
                            "question": "How do I know I’m getting better at Quick Math?",
                            "answer": "Keep an eye on your scores, and you'll see how much you're improving. The more you practice, the higher your scores will go. You're becoming a math wizard without even realizing it!"
                        },
                        {
                            "question": "What can I do to keep my brain happy while using Quick Math?",
                            "answer": "Make sure to take short breaks, drink water, and have some healthy snacks. Your brain works best when you're feeling good!"
                        }
                    ]
                },
                {
                    id: 'technical',
                    name: 'Technical',
                    faqs: [
                        
                            {
                                "question": "What do I do if I forget my password on Quick Math?",
                                "answer": "No worries! Just click on the 'Forgot Password?' link on the login page. Enter the email address you used to sign up, and we'll send you instructions to reset your password. If you're stuck, ask a grown-up to help you out."
                            },
                            {
                                "question": "How can I change my password on Quick Math?",
                                "answer": "If you know your current password and want to change it, first log in to your account. Then go to your account settings and select 'Change Password.' You'll need to enter your current password once and your new password twice. It's like a secret code update!"
                            },
                            {
                                "question": "Can I update my username on Quick Math?",
                                "answer": "Got a new favorite name? You can update your username by logging into your account and going to account settings. Look for the 'Edit Profile' option, where you'll find the field to change your username. Remember, your new name should be just as unique as you are!"
                            },
                            {
                                "question": "What should I do if I'm having trouble logging in to Quick Math?",
                                "answer": "If you're having trouble logging in, check to make sure you're entering the correct username and password. If you still can't log in, try resetting your password using the 'Forgot Password?' link. For other issues, it might be a good idea to ask a grown-up for help or contact our support team."
                            }
                        ]

                    
                },
                {
                    id: 'rewards',
                    name: 'Rewards',
                    faqs: [
                        { question: 'How do I earn more stars?', answer: 'The more right answers you get on a quiz, the more stars you get! Collect them all to progress further!' },

                    ]
                },
                {
                    id: 'parents',
                    name: 'Parental control',
                    faqs: [
                        {
                            "question": "What can I do with my parental access on Quick Math?",
                            "answer": "With parental access, you can monitor your child's progress, view detailed reports, and receive recommendations for areas of improvement. You can also adjust settings, such as setting study goals or time limits, to personalize their learning experience. Additionally, you have the option to communicate with educators or support staff for further guidance."
                        },
                        {
                            "question": "How can I see my child's progress on Quick Math?",
                            "answer": "As a parent, you can view your child's progress through your parental dashboard. This includes detailed reports on quizzes taken, scores achieved, and subjects covered. You'll also have access to insights on their strengths and areas for improvement, allowing you to track their learning journey over time."
                        },
                        {
                            "question": "How can I identify areas my child might need to work on using Quick Math?",
                            "answer": "The parental dashboard provides analytics on your child's performance, including areas where they might be struggling. Look for patterns in quiz scores and the 'Needs Improvement' sections to identify specific subjects or concepts your child might need extra help with."
                        },
                    ]
                },
            ]
        }
    },
    methods: {
        scrollToCategory(categoryId) {
            const element = document.getElementById(categoryId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>

<style scoped>
.faq-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.faq-header {
  font-family: 'Kavoon', Helvetica, Arial, sans-serif;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 40px;
}

.category-buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}

.category-btn {
    background-color: white;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-size: 16px;
    margin: 0 10px 10px 0;
    cursor: pointer;
    transition: border-color 0.25s;
}

.category-btn:hover {
    cursor: pointer;
  background-color: #80808033;
}

.faq-content section {
    margin-top: 2rem;
}

.faq-content h2,
h3,
p {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.faq-content h2 {
    font-family: "Kavoon", Helvetica, Arial, sans-serif;
    font-size: 30px;
}

.faq-content h3 {
    color: #213547;
    margin: 1rem 0 0.5rem;
}

.faq-content p {
    color: #213547;
    margin: 0;
}
.faq-footer {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 16px;
}

.contact-link {
  color: #213547;
  
}

.contact-link:hover {
  text-decoration: underline;
}
</style>
