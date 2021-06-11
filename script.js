const testimonialsContainer = document.querySelector('.testimonials-container')

const testimonial = document.querySelector('.testimonial')

const userImage = document.querySelector('.user-image')

const username = document.querySelector('.username')

const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Warren Buffet',
        position: 'Berkshire Hathaway',
        photo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0U5a32I81EyodYLVvHBNs7GSlBgmag51JRMz_0RQ2DqthEDKr',
        text: 'When you get to my age, youll really measure your success in life by how many of the people you want to have love you actually do love you. Thats the ultimate test of how you have lived your life. The more you give love away, the more you get.',
    },
    {
        name: 'Bill Gates',
        position: 'Microsoft ',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurna6a42SpKe38ovPipim3STLIjTlU0uXuw&usqp=CAU',
        text: 'Life is not fair; get used to it.',
    },
    {
        name: 'Floyd Mayweather',
        position: 'Mayweather Promotions',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Floyd_Mayweather%2C_Jr._at_DeWalt_event_%285888721735%29_%28rotated_4%29.jpg',
        text: 'You hear certain things, negative things, all the time that arent true, but you never hear about the positive.',
    },
    {
        name: 'Elon Musk',
        position: 'Tesla',
        photo: 'https://live-production.wcms.abc-cdn.net.au/a241657894f4d79f0c3ea0705f0f1f07?impolicy=wcms_crop_resize&cropH=1989&cropW=2992&xPos=8&yPos=8&width=862&height=575',
        text: 'When something is important enough, you do it even if the odds are not in your favor.',
    },
    {
        name: 'Jeff Bezos',
        position: 'Amazon',
        photo: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg',
        text: 'There are two kinds of companies, those that work to try to charge more and those that work to charge less. We will be the second.',
    },
]

let idx = 0

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx]
    
    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name 
    role.innerHTML = position

    idx++

    if (idx > testimonials.length - 1)
    {
        idx = 0
    }
}


setInterval(updateTestimonial, 10000)