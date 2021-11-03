import ArrowIcon from './ArrowIcon'

export default function Panel() {
    return (
        <div className="">
            <div className="">
                <h2 className="">Want to receive jobs specifically picked for you?</h2>
                <p className="">When a new opportunity fits your interests, we'll send you an email!</p>
            </div>
            <div className="">
                <label className="" for="email">Please input your email address <span className="">*</span></label>
                <div className="">
                    <input type="email"
                        className=""
                        id="email"
                        placeholder="johnwsmith@gmail.com" />
                    <button className="">
                        <ArrowIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}