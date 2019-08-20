class AuthController < ApplicationController
  def login
    # Take in a username
    # User input password
    # Query input to teacher.password
  end

  def verify
    @teacher = Teacher.find_by(username: params[:login][:username])
    if @teacher && @teacher.authenticate(params[:login][:password])
      session[:teacher_id] = @teacher.id
      redirect_to students_path
    else
      flash[:error_message] = "Incorrect Credentials!"
      render :login
    end
  end

  def logout
    session.clear
    redirect_to login_path
  end
end
