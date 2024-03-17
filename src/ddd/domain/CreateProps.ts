type CreateProps<BaseProps, Config extends {
  optional?: keyof BaseProps;
  omit?: keyof BaseProps;
}> = Omit<Pick<Partial<BaseProps>, Config['optional'] extends keyof BaseProps ? Config['optional'] : never> & Omit<BaseProps, Config['optional'] extends keyof BaseProps ? Config['optional'] : never>, Config['omit'] extends keyof BaseProps ? Config['omit'] : never>;

export default CreateProps;