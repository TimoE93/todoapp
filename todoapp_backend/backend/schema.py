import graphene
from graphene_django import DjangoObjectType

from todos.models import Todo

class TodoType(DjangoObjectType):
    class Meta:
        model = Todo
        fields = ("id", "name")

class Query(graphene.ObjectType):
    all_todos = graphene.List(TodoType)
    todo_by_name = graphene.Field(TodoType, name=graphene.String(required=True))

    def resolve_all_todos(root, info):
        return Todo.objects.all()

    def resolve_todo_by_name(root, info, name):
        try:
            return Todo.objects.get(name=name)
        except Todo.DoesNotExist:
            return None


class TodoMutation(graphene.Mutation):
    class Arguments: 
        name = graphene.String(required=True)
        id = graphene.ID()

    todo = graphene.Field(TodoType)    

    @classmethod
    def mutate(cls, root, info, name, id):
        todo = Todo(name=name)
        todo.save()
        return TodoMutation(todo = todo)

class Mutation(graphene.ObjectType):
    create_todo = TodoMutation.Field()        

schema = graphene.Schema(query=Query, mutation=Mutation)
            