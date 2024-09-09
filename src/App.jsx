import { useState, useEffect } from "react"

function App() {
  const [advice, setAdvice] = useState();

  useEffect(() => {
      fetch('https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then((data) => {
          // setAdvice(advice[0].slip)
          console.log(data.slip[0].id)
      });
  }, []);

return (
<div className='font-manrope bg-dark-blue h-screen grid place-items-center'>
  <div className="bg-dark-grayish-blue lg:w-2/5 w-4/5 p-10 pb-16 text-center rounded-2xl relative">
    
    {/* {advice.map((slip) => {
      return (
        <small className="text-neon-green tracking-[.3em] font-medium">ADVICE #117</small>
        <h1 className="text-light-cyan text-2xl font-bold py-4 pb-8">"{advice}"</h1>
      );
    
    })} */}
    
    <img className="mx-auto my-0" src="./assets/images/pattern-divider-desktop.svg" alt="" />
    <div className="absolute bg-neon-green p-3 rounded-full -bottom-5 left-2/4 -translate-x-2/4 ">
      <img className="hover:animate-spin"
        src="./assets/images/icon-dice.svg" />
    </div>
  </div>
</div>
)
}

export default App