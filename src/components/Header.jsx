function Header(props) {
  return (
    <header >
      <div className="mx-auto max-w-full">
          <div className="mx-auto max-w-7xl text-left px-4 py-8 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-5xl">{props.title}</h1>
          </div>
      </div>
    </header>
  );
}

export default Header;