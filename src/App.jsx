function App() {
return (
<div className='font-manrope bg-dark-blue h-screen grid place-items-center'>
  <div className="bg-dark-grayish-blue lg:w-2/5 w-4/5 p-10 pb-16 text-center rounded-2xl relative">
    <small className="text-neon-green tracking-[.3em] font-medium">ADVICE #117</small>
    <h1 className="text-light-cyan text-2xl font-bold py-4 pb-8">"If you are working on something that you really care
      about, you
      don't have to be pushed"</h1>
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