import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  static resetError() {
    this.props.setIsError(false);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>에러가 발생했슈</h1>;
          <button onClick={ErrorBoundary.resetError}>다시 눌러유</button>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
