const FooterComponent = () => {
    return(
        <footer className="px-2 md:px-20 pt-28 pb-5">
            <div className="border-t border-white/60 flex justify-center md:justify-between items-center py-4">
                <img src="logo.png" alt="logo" width={120} className="hidden md:block" />
                <h2 className="text-white/50 ">© 2024 - 2025 Serpfy. All rights reserved.</h2>
            </div>
        </footer>
    )
}


export default FooterComponent