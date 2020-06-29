'use strict';

const e = React.createElement;

class ScrollToTopBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        is_visible: false 
    };
}

componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (f) {
        scrollComponent.toggleVisibility();
    });
}

toggleVisibility() {
    if (window.pageYOffset > 50) {
        this.setState({
            is_visible: false
        });
    }
}

scrollToTop() {
    window.scrollTo({
        top: 0,
        behaviour: "smooth"
    });
}

render() {
    const { is_visible } = this.state;
    return e(
        <div className="scroll-to-top">
            {is_visible && (
                <div onClick={() => this.scrollToTop()}>
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-arrow-up fa-stack-1x fa-inverse" aria-hidden="true"></i>
                    </span>
                </div>
            )}
        </div>
    );
}
}

const domContainer = document.querySelector('#ScrollToTopBtn');
ReactDOM.render(e(ScrollToTopBtn), domContainer);