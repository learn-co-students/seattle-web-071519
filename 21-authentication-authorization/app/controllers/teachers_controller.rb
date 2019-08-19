class TeachersController < ApplicationController
  def new
    @teacher = Teacher.new
  end

  def create
    # byebug
    @teacher = Teacher.create(username: params[:teacher][:username],
                              password: params[:teacher][:password])
    session[:user_id] = @teacher.id
    # byebug
    redirect_to students_path
  end
end
