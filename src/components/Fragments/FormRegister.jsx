const FormRegister = (props) => {

    return (
        <form action="">
        <Inputform
          children="Email"
          type="mail"
          name="email"
          placeholder="Email"
          />
          <Inputform
    
          children="Password"
          type="password"
          name="password"
          placeholder="password"
          />

          <Inputform
    
          children="Confirm Password"
          type="password"
          name="password"
          placeholder="password"
          />
          <Button classname="bg-slate-100 w-full" textCl="text-white">
            Login
          </Button> </form>

    )
}