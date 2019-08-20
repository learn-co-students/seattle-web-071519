class TeachersController < ApplicationController
  def new
    @teacher = Teacher.new
  end

  def show
    if !set_user
      redirect_to login_path
    end
  end

  def create
    # byebug
    @teacher = Teacher.create(username: params[:teacher][:username],
                              password: params[:teacher][:password])
    session[:teacher_id] = @teacher.id
    # byebug
    redirect_to students_path
  end
end
