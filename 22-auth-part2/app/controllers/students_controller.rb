class StudentsController < ApplicationController
  before_action :redirected_user
  def index
    # authenticate method
    # check against the student
    if logged_in?
      @students = Student.all
    else
      redirect_to login_path
    end
  end

  def show
    if logged_in?
      @student = Student.find_by(id: params[:id])
    else
      redirect_to login_path
    end
  end

  def new
    @student = Student.new
  end

  def create
    @student = Student.new(student_params)

    if @student.save
      redirect_to @student
    else
      render :new
    end

  end

  private
  def student_params
    params.require(:student).permit(:name, :email, :cohort_id)
  end
end
