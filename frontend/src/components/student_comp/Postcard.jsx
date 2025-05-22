import React from 'react'
import Posts from './Posts'


  const carditem = [ 
         {
             id:1,
             name:'Lakshita M',
             role:'Alumini: Agile Expert',
             time:'2h',
             domain:'Advice',
             description: 'Learning DSA boosts your problem-solving abilities and make you a stronger programmer.DSA is foundation for almost every software like GPS, Search Engines, AI ChatBots, Gaming Apps, Databases, Web Applications, etc Top Companies like Google, Microsoft, Amazon, Apple, Meta and many other heavily focus on DSA in interviews.',
             hashtags:['good practice','consistency'],
             imageUrl:'https://miro.medium.com/v2/resize:fit:1400/1*iO3Vw-2_STm6wZFTkgvuiw.png',
             likes:'You and 3,402 others',
             comments:'2.k comments',
             shares:'345 shares'
         },
         {
            id:2,
            name:'Lakshita M',
            role:'Alumini:Agile Expert',
            time:'2h',
            domain:'Advice',
            description: 'Learning DSA boosts your problem-solving abilities and make you a stronger programmer.DSA is foundation for almost every software like GPS, Search Engines, AI ChatBots, Gaming Apps, Databases, Web Applications, etc Top Companies like Google, Microsoft, Amazon, Apple, Meta and many other heavily focus on DSA in interviews.',
            hashtags:['good practice','consistency'],
            imageUrl:'https://media-exp2.licdn.com/dms/image/C4E22AQHclWAJNdGnYg/feedshare-shrink_2048_1536/0/1658378866308?e=1661385600&v=beta&t=CxyYAKp1Ak_QEIVCDwSP_FYR15gqurbFsvvUX-4FcyQ',
            likes:'You and 3,402 others',
            comments:'2.k comments',
            shares:'345 shares'
        },
        {
            id:3,
            name:'Lakshita M',
            role:'Alumini:Agile Expert',
            time:'2h',
            domain:'Advice',
            description: 'Learning DSA boosts your problem-solving abilities and make you a stronger programmer.DSA is foundation for almost every software like GPS, Search Engines, AI ChatBots, Gaming Apps, Databases, Web Applications, etc Top Companies like Google, Microsoft, Amazon, Apple, Meta and many other heavily focus on DSA in interviews.',
            hashtags:['good practice','consistency'],
            imageUrl:'https://media-exp2.licdn.com/dms/image/C4E22AQHclWAJNdGnYg/feedshare-shrink_2048_1536/0/1658378866308?e=1661385600&v=beta&t=CxyYAKp1Ak_QEIVCDwSP_FYR15gqurbFsvvUX-4FcyQ',
            likes:'You and 3,402 others',
            comments:'2.k comments',
            shares:'345 shares'
        },
        {
            id:4,
            name:'Lakshita M',
            role:'Alumini:Agile Expert',
            time:'2h',
            domain:'Advice',
            description: 'Learning DSA boosts your problem-solving abilities and make you a stronger programmer.DSA is foundation for almost every software like GPS, Search Engines, AI ChatBots, Gaming Apps, Databases, Web Applications, etc Top Companies like Google, Microsoft, Amazon, Apple, Meta and many other heavily focus on DSA in interviews.',
            hashtags:['good practice','consistency'],
            imageUrl:'https://media-exp2.licdn.com/dms/image/C4E22AQHclWAJNdGnYg/feedshare-shrink_2048_1536/0/1658378866308?e=1661385600&v=beta&t=CxyYAKp1Ak_QEIVCDwSP_FYR15gqurbFsvvUX-4FcyQ',
            likes:'You and 3,402 others',
            comments:'2.k comments',
            shares:'345 shares'
        }
       
]

function Postcard() {
    // console.log("props data from post card",props)
  return (
    <div className='sm:mt-6 md:mt-6 lg:mt-0'>
        {carditem?.map((item) => (
            <div className="p-5" key = {item.id}>
            <Posts {...item}/>
            </div>
        ))}
    </div>
  )
}

export default Postcard
















// function Postcard(props) {
//     console.log("props data from post card",props)
//   return (
//     <div className=' sm:mt-6 md:mt-6 lg:mt-0'>
//         {props.data?.map((item) => (
//             <Posts {...item}/>
//         ))}
//     </div>
//   )
// }

// export default Postcard