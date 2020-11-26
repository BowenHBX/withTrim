import React, { Component } from 'react';

let isPaste = false;
const withTrim = (WrappedComponent: any) =>
  class WrapperComponent extends Component {
    handlePaste = (e: any) => {
      isPaste = true;
      // @ts-ignore
      const { onChange } = this.props;
      onChange(e);
    }

    onCustomChange = (e: any)=>{
      if(isPaste){
        e.target.value = e.target.value.trim();
        isPaste = false;
      }
      // @ts-ignore
      const { onChange } = this.props;
      onChange(e);
    }

    render() {
      return <WrappedComponent onPaste={this.handlePaste} {...this.props} onChange={this.onCustomChange} />;
    }
  }

export default withTrim;
