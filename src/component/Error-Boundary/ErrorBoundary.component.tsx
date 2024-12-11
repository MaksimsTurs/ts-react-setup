// import scss from './ErrorBoundary.module.scss'

import { Fragment, Component } from "react";

import type { ErrorInfo, ReactNode } from 'react'
import type { ErrorBoundaryProps, ErrorBoundaryState } from "./ErrorBoundary.component.type";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.info(`Error: ${error.message}`)
    console.info(`Error occured in: ${errorInfo.componentStack}`)
  }

  render(): ReactNode {
    return(
      //Add you error component here
      <Fragment>{this.state.hasError ? this.props.fallbackComponent : this.props.children}</Fragment>
    )
  }
}

export default ErrorBoundary