import React from 'react';
import { Link } from 'react-router-dom';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import api from '../api';
import './styles/Badges.css';


class Badges extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        data: undefined,
        loading: true,
        error: null
      };
      
    }

    componentDidMount(){
      this.fetchBadges();
    }

    fetchBadges = async () => {
      this.setState({
        loading: true,
        error: null
      });

      try{
        const data = await api.badges.list();
        this.setState({
          loading: false,
          data: data
        })
      }catch(error){
        this.setState({
          loading: false,
          error: error
        })
      }

    }

    // componentDidUpdate(prevProps, prevState){
    //   console.log("5. componentDidUpdate()")
    //   console.log({
    //     prevProps: prevProps,
    //     prevState: prevState
    //     });
      
    //     console.log({
    //       props: this.props,
    //       state: this.state
    //     })
    // }

    componentWillUnmount(){
      console.log("6. componentDidUnmount()");
      // clearTimeout(this.timeoutId);
    }

    render(){
      
      if (this.state.error) {
        return(`Error: ${this.state.error}`);
      }
      
        return(
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="confLogo" />
                        </div>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <div className="Badges__buttons">
                            <Link to="/badges/new" className="btn btn-primary">Nuevo Badge</Link>
                        </div>
                        <BadgesList loading={this.state.loading} Badges={this.state.data}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;