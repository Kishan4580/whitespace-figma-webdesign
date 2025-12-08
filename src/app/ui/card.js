import { Button } from "./button";
export function Card ({plan, styles}){
    const  bgColor= styles.backgorundColor;
    const isBgColorGiven = bgColor ? true : false;
    return (
        <div className={`${!(isBgColorGiven) && "border-yellow-700" } ${isBgColorGiven ? `text-black ${bgColor}` : "text-white"} flex flex-col gap-4 rounded-md`}>
           <h3>
        {plan.title}
           </h3>
           <p className={`text-2xl font-bold ${!(isBgColorGiven) && "border-yellow-700" }`} >
              {plan.price}
           </p>
           <div className="">
            
            <ul className="plan text-black ">
                <caption>{plan.caption}</caption>
       { plan.features.map((feature, i) => <li key={i}>{feature.content}</li> )}
             </ul>
           </div>
           <Button className={`${!(isBgColorGiven) && "border-yellow-700" } ${isBgColorGiven ? "bg-[#4F9CF9]" : "transparent"}`}>Get Started</Button>
        </div>
    )
}


