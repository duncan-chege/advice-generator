import { useState, useEffect } from "react"
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState(null);

  const getAdvice = () => {
      axios
        .get('https://api.adviceslip.com/advice')
        .then((res) => {
          setAdvice(res.data.slip);
          console.log(advice);
        })
        .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAdvice();
  }, []);

return (
<div className='font-manrope bg-dark-blue h-screen grid place-items-center'>
  <div className="bg-dark-grayish-blue lg:w-2/5 w-4/5 p-10 pb-16 text-center rounded-2xl relative">
    
    {advice ? (
      <div key={advice.id}>
        <small className="text-neon-green tracking-[.3em] font-medium">ADVICE #{advice.id}</small>
        <h1 className="text-light-cyan text-2xl font-bold py-4 pb-8">"{advice.advice}"</h1>
      </div>
    ): <h4 className="text-light-cyan text-lg font-bold py-4 pb-8"> Loading ...</h4>
    }
    
    <img className="mx-auto my-0 hidden md:block" src="./assets/images/pattern-divider-desktop.svg" alt="" />
    <img className="mx-auto my-0 block md:hidden" src="./assets/images/pattern-divider-mobile.svg" alt="" />
    <div className="absolute bg-neon-green rounded-full -bottom-5 left-2/4 -translate-x-2/4  hover:shadow-[1px_1px_14px_4px_#52ffa8]">
      <img className="hover:animate-spin p-3 cursor-pointer"
        src="./assets/images/icon-dice.svg" onClick={getAdvice}/>
    </div>
  </div>
</div>
)
}

export default App