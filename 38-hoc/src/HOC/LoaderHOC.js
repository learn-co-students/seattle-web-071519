import React from 'react'
import Loader from './Loader'

const LoaderHOC = WrappedComponent => {
    return class LoaderHOC extends React.Component {
        
        isLoading = () => {
            return (this.props.season.season === "");
        }

        render() {
            console.log(this.props)
            return this.isLoading()?<Loader />:<WrappedComponent {...this.props} />
        }
    }
}

export default LoaderHOC