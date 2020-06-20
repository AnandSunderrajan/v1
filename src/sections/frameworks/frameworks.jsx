import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarBorder';
import './frameworks.css';


class FrameworksComponent extends Component {

    render() {
        return (
            <div className="design">
                <p className="headline">Frameworks and Software</p>
                <p className="text-justify">
                    Through my parents jobs as diplomats, I fell in love with cultures worldwide.

                    Since then, I have tried to create objects that would have a positive impact.

                    Presently, I aim to develop beautiful, impactful, and intuitive solutions.

                </p>

                <div className="design-checkbox">
                    <Checkbox
                        checkedIcon={<StarIcon />}
                        uncheckedIcon={<StarOutlineIcon />}
                        iconStyle={{"fill":"#A80202"}}
                        label="Adobe Suite"
                    />
                </div>
                <div className="design-checkbox">
                    <Checkbox
                        checkedIcon={<StarIcon />}
                        uncheckedIcon={<StarOutlineIcon />}
                        iconStyle={{"fill":"#A80202"}}
                        label="AWS"
                    />
                </div>
                <div className="design-checkbox">
                    <Checkbox
                        checkedIcon={<StarIcon />}
                        uncheckedIcon={<StarOutlineIcon />}
                        iconStyle={{"fill":"#A80202"}}
                        label="Git"
                    />
                </div>
                <div className="design-checkbox">
                    <Checkbox
                        checkedIcon={<StarIcon />}
                        uncheckedIcon={<StarOutlineIcon />}
                        iconStyle={{"fill":"#A80202"}}
                        label="Jetbrains Suite"
                    />
                </div>
                <div className="design-checkbox">
                    <Checkbox
                        checkedIcon={<StarIcon />}
                        uncheckedIcon={<StarOutlineIcon />}
                        iconStyle={{"fill":"#A80202"}}
                        label="Keras"
                    />
                </div>
                <div className="design-checkbox">
                    <Checkbox
                        checkedIcon={<StarIcon />}
                        uncheckedIcon={<StarOutlineIcon />}
                        iconStyle={{"fill":"#A80202"}}
                        label="KiCad"
                    />
                </div>
                <div className="design-checkbox">
                    <Checkbox
                        checkedIcon={<StarIcon />}
                        uncheckedIcon={<StarOutlineIcon />}
                        iconStyle={{"fill":"#A80202"}}
                        label="Linux"
                    />
                </div>
                <div className="design-checkbox">
                    <Checkbox
                        checkedIcon={<StarIcon />}
                        uncheckedIcon={<StarOutlineIcon />}
                        iconStyle={{"fill":"#A80202"}}
                        label="LaTeX"
                    />
                </div>
                <div className="design-checkbox">
                    <Checkbox
                        checkedIcon={<StarIcon />}
                        uncheckedIcon={<StarOutlineIcon />}
                        iconStyle={{"fill":"#A80202"}}
                        label="Microsoft Office"
                    />
                </div>
                <div className="design-checkbox">
                    <Checkbox
                        checkedIcon={<StarIcon />}
                        uncheckedIcon={<StarOutlineIcon />}
                        iconStyle={{"fill":"#A80202"}}
                        label="Quartus"
                    />
                </div>
                <div className="design-checkbox">
                    <Checkbox
                        checkedIcon={<StarIcon />}
                        uncheckedIcon={<StarOutlineIcon />}
                        iconStyle={{"fill":"#A80202"}}
                        label="React"
                    />
                </div>
            </div>
        );
    }
}

export default FrameworksComponent;
