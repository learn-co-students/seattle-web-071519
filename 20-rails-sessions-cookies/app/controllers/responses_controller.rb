class ResponsesController < ApplicationController

    before_action :define_question, :define_response

    def new
    end

    def define_question
        @question = Question.order("RANDOM()").limit(1)[0]
    end

    def define_response
        @questionResponse = Response.new({ question: @question })
    end

    def create
      # byebug
        # @number_correct = 0
        if !session[:number_correct]
          session[:number_correct] = 0
        end

        response = Response.create(response_params)
        if response.question.correct_answer == response.answer
            # @number_correct = @number_correct + 1
            # session[:number_correct].to_i += 1
            session[:number_correct] = session[:number_correct].to_i + 1
            flash[:error_message] = "Correct!"
            puts "Correct"
        else
            flash[:error_message] = "Incorrect"
            puts "Incorrect"
        end
        redirect_to '/random-question'
    end

    def response_params
        params.require(:response).permit(:answer_id, :question_id)
    end

end
